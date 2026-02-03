import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const ScanFoodScreen = ({ navigation }) => {
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null);

    if (!permission) {
        // Camera permissions are still loading.
        return <View style={styles.container} />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white', textAlign: 'center', marginTop: 50 }}>
                    We need your permission to show the camera
                </Text>
                <TouchableOpacity onPress={requestPermission} style={styles.permButton}>
                    <Text style={styles.permText}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                console.log("Capturing image...");
                const photo = await cameraRef.current.takePictureAsync();
                console.log("Photo captured:", photo.uri);
                Alert.alert("Success", "Photo captured! Sending to backend...", [
                    { text: "OK", onPress: () => navigation.goBack() }
                ]);
                // Here you would upload photo.uri to your Python backend
            } catch (error) {
                console.error("Camera error:", error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <CameraView
                style={styles.camera}
                facing="back"
                ref={cameraRef}
            >
                <SafeAreaView style={styles.overlay}>
                    {/* Close Button */}
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                        <Ionicons name="close" size={30} color={COLORS.white} />
                    </TouchableOpacity>

                    {/* Capture Controls */}
                    <View style={styles.bottomControls}>
                        <TouchableOpacity style={styles.captureButtonOuter} onPress={takePicture}>
                            <View style={styles.captureButtonInner} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </CameraView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    camera: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: 'space-between',
    },
    closeButton: {
        alignSelf: 'flex-start',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 30,
        marginLeft: 20,
        marginTop: 10,
    },
    bottomControls: {
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    captureButtonOuter: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    captureButtonInner: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.white,
    },
    permButton: {
        marginTop: 20,
        backgroundColor: COLORS.primaryAccent,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    permText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default ScanFoodScreen;
