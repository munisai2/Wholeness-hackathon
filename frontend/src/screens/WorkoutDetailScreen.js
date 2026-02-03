import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { getWorkoutDetails } from '../services/api';

const { width, height } = Dimensions.get('window');

const WorkoutDetailScreen = ({ route, navigation }) => {
    const { id } = route.params || { id: 1 };
    const [details, setDetails] = useState(null);

    useEffect(() => {
        getWorkoutDetails(id).then(data => setDetails(data));
    }, [id]);

    if (!details) return <View style={styles.container} />;

    return (
        <View style={styles.container}>
            {/* Header Image */}
            <View style={styles.imageContainer}>
                <Image source={{ uri: details.image_url }} style={styles.headerImage} resizeMode="cover" />
                <View style={styles.imageOverlay} />

                <SafeAreaView style={styles.headerNav}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color={COLORS.white} />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>

            <ScrollView style={styles.contentContainer}>
                <Text style={styles.title}>{details.title}</Text>

                {/* Stats Row */}
                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <MaterialCommunityIcons name="lightning-bolt" size={20} color={COLORS.inactiveText} />
                        <Text style={styles.statText}>{details.calories}</Text>
                    </View>
                    <View style={styles.statItem}>
                        <MaterialCommunityIcons name="clock-outline" size={20} color={COLORS.inactiveText} />
                        <Text style={styles.statText}>{details.duration}</Text>
                    </View>
                </View>

                {/* Start Button */}
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={() => navigation.navigate('WorkoutPlayer', { id: details.id })}
                >
                    <Text style={styles.startButtonText}>Start Workout</Text>
                    <View style={styles.playIconCircle}>
                        <Ionicons name="play" size={20} color={COLORS.primaryAccent} />
                    </View>
                </TouchableOpacity>

                {/* Round List */}
                <View style={styles.roundSection}>
                    <View style={styles.roundHeader}>
                        <Text style={styles.roundTitle}>Round 1</Text>
                        <MaterialCommunityIcons name="chevron-down" size={24} color={COLORS.white} />
                    </View>

                    {details.round_exercises.map((ex, index) => (
                        <View key={index} style={styles.exerciseRow}>
                            <Image source={{ uri: ex.image_url }} style={styles.exerciseThumb} />
                            <View style={styles.exerciseInfo}>
                                <Text style={styles.exerciseName}>{ex.name}</Text>
                                <Text style={styles.exerciseTime}>{ex.time}</Text>
                            </View>
                            <TouchableOpacity style={styles.playRowButton}>
                                <Ionicons name="play-circle-outline" size={32} color={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBackground,
    },
    imageContainer: {
        height: height * 0.45,
        width: width,
        position: 'relative',
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    headerNav: {
        position: 'absolute',
        top: 0,
        left: 20,
    },
    backButton: {
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
    },
    contentContainer: {
        flex: 1,
        marginTop: -40, // Overlap the image
        backgroundColor: COLORS.primaryBackground,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        paddingTop: 30,
    },
    title: {
        color: COLORS.white,
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    statsRow: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondaryBackground,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 15,
    },
    statText: {
        color: COLORS.white,
        marginLeft: 6,
        fontWeight: '600',
    },
    startButton: {
        backgroundColor: COLORS.primaryAccent, // Specific Request: Yellow replaced with Blue #2979FF
        borderRadius: 30,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        position: 'relative',
    },
    startButtonText: {
        color: COLORS.white, // Changed to white for better contrast on Blue
        fontSize: 18,
        fontWeight: 'bold',
    },
    playIconCircle: {
        position: 'absolute',
        right: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#000', // Black circle
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundSection: {
        marginBottom: 40,
    },
    roundHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    roundTitle: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    exerciseRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: COLORS.secondaryBackground,
        padding: 10,
        borderRadius: 15,
    },
    exerciseThumb: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 15,
    },
    exerciseInfo: {
        flex: 1,
    },
    exerciseName: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
    },
    exerciseTime: {
        color: COLORS.inactiveText,
        fontSize: 12,
    },
    playRowButton: {
        padding: 5,
    }
});

export default WorkoutDetailScreen;
