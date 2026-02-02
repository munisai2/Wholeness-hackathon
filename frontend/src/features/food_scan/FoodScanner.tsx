import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const FoodScanner: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [capturing, setCapturing] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [scanResult, setScanResult] = useState<any>(null);

    const handleStartCaptureClick = useCallback(() => {
        setCapturing(true);
        setRecordedChunks([]);
        if (webcamRef.current && webcamRef.current.video) {
            const stream = webcamRef.current.video.srcObject as MediaStream;
            // Use mimeType 'video/webm' which is widely supported in browsers for recording
            const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });

            mediaRecorder.addEventListener("dataavailable", ({ data }) => {
                if (data.size > 0) {
                    setRecordedChunks((prev) => [...prev, data]);
                }
            });

            mediaRecorder.start();
            mediaRecorderRef.current = mediaRecorder;
        }
    }, [webcamRef]);

    const handleStopCaptureClick = useCallback(() => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        setCapturing(false);
        // Automatically analyze after stopping? Or let user click "Analyze"?
        // Let's analyze automatically when data is ready.
    }, []);

    const handleAnalyze = async () => {
        if (recordedChunks.length) {
            setIsProcessing(true);
            const blob = new Blob(recordedChunks, { type: "video/webm" });
            const formData = new FormData();
            formData.append("file", blob, "scan.webm");

            try {
                // Adjust URL based on your backend setup (proxy in vite.config handles /api)
                const response = await axios.post('/api/food/scan-video', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                setScanResult(response.data);
            } catch (error) {
                console.error("Error analyzing video:", error);
                alert("Failed to analyze video.");
            } finally {
                setIsProcessing(false);
            }
        }
    };

    return (
        <div className="food-scanner-container" style={{ textAlign: 'center' }}>
            <h2>Food Scanner (Video Mode)</h2>
            <div className="webcam-wrapper" style={{ margin: '20px auto', width: '640px', background: '#000' }}>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    width={640}
                    height={480}
                    videoConstraints={{ facingMode: "environment" }}
                />
            </div>

            <div className="controls" style={{ marginBottom: '20px' }}>
                {capturing ? (
                    <button onClick={handleStopCaptureClick} style={{ padding: '10px 20px', background: 'red', color: 'white' }}>Stop Recording</button>
                ) : (
                    <button onClick={handleStartCaptureClick} style={{ padding: '10px 20px', background: 'green', color: 'white' }}>Start Recording</button>
                )}

                {!capturing && recordedChunks.length > 0 && (
                    <button onClick={handleAnalyze} disabled={isProcessing} style={{ padding: '10px 20px', marginLeft: '10px' }}>
                        {isProcessing ? "Analyzing..." : "Analyze Recording"}
                    </button>
                )}
            </div>

            {scanResult && (
                <div className="results" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc' }}>
                    <h3>Analysis Result</h3>
                    <h4>Items Detected:</h4>
                    <ul>
                        {scanResult.items?.map((item: any, idx: number) => (
                            <li key={idx}>
                                <strong>{item.name}</strong> - {item.quantity}<br />
                                <small>Nutrition: {JSON.stringify(item.nutrition)}</small>
                            </li>
                        ))}
                    </ul>
                    <h4>Meal Prep Suggestion:</h4>
                    <pre>{JSON.stringify(scanResult.meal_prep, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default FoodScanner;

