import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const { width, height } = Dimensions.get('window');

const WorkoutPlayerScreen = ({ navigation }) => {
    const [status, setStatus] = useState({});
    const video = React.useRef(null);

    // Placeholder video URL (Sample workout video or similar)
    const videoUrl = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

    return (
        <View style={styles.container}>
            {/* Back Button Overlay */}
            <SafeAreaView style={styles.headerOverlay}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                    <Ionicons name="arrow-back" size={24} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <MaterialCommunityIcons name="cast" size={24} color={COLORS.white} />
                </TouchableOpacity>
            </SafeAreaView>

            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: videoUrl,
                }}
                useNativeControls={false}
                resizeMode={ResizeMode.COVER}
                isLooping
                shouldPlay
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

            {/* Bottom Overlay */}
            <View style={styles.bottomOverlay}>
                {/* Timer */}
                <Text style={styles.timerData}>00:35</Text>

                {/* Progress Bar */}
                <View style={styles.progressContainer}>
                    <Text style={styles.progressLabel}>27% Completed</Text>
                    <Text style={styles.progressLabel}>03:00 Total Time</Text>
                </View>
                <View style={styles.progressBarTrack}>
                    <View style={styles.progressBarFill} />
                    <View style={styles.progressBarKnob} />
                </View>

                {/* Controls */}
                <View style={styles.controlsRow}>
                    <TouchableOpacity style={styles.controlButtonSmall}>
                        <Text style={styles.controlText}>Prev</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.playPauseButton}
                        onPress={() =>
                            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        }
                    >
                        <Ionicons
                            name={status.isPlaying ? "pause" : "play"}
                            size={30}
                            color="#000" // Black icon on blue button
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.controlButtonSmall}>
                        <Text style={styles.controlText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    video: {
        width: width,
        height: height,
    },
    headerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    iconButton: {
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
    },
    bottomOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 250,
        backgroundColor: 'rgba(0,0,0,0.8)', // Dark gradient simulation
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        paddingBottom: 40,
        alignItems: 'center',
    },
    timerData: {
        fontSize: 48,
        color: COLORS.white,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    progressLabel: {
        color: COLORS.inactiveText,
        fontSize: 12,
    },
    progressBarTrack: {
        height: 4,
        backgroundColor: '#333',
        width: '100%',
        borderRadius: 2,
        marginBottom: 30,
        position: 'relative',
    },
    progressBarFill: {
        height: '100%',
        width: '30%',
        backgroundColor: COLORS.primaryAccent, // #2979FF
        borderRadius: 2,
    },
    progressBarKnob: {
        position: 'absolute',
        left: '30%',
        top: -6,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: COLORS.primaryAccent, // #2979FF
    },
    controlsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
    },
    controlButtonSmall: {
        padding: 10,
    },
    controlText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
    },
    playPauseButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.primaryAccent, // #2979FF (Blue)
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WorkoutPlayerScreen;
