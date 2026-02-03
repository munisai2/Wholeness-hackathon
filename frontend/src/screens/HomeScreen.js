import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

const Header = () => (
    <View style={styles.headerContainer}>
        <View>
            <Text style={styles.headerSubtitle}>Wholeness</Text>
            <Text style={styles.headerTitle}>Welcome Back</Text>
        </View>
        <MaterialCommunityIcons name="bell-outline" size={24} color={COLORS.white} />
    </View>
);

const SummaryCard = () => (
    <LinearGradient
        colors={[COLORS.gradientBlueStart, COLORS.gradientBlueEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardContainer}
    >
        <View style={styles.cardContent}>
            <View style={styles.userInfo}>
                <View style={styles.avatarContainer}>
                    <MaterialCommunityIcons name="account" size={24} color={COLORS.gradientBlueStart} />
                </View>
                <View style={styles.statsContainer}>
                    <Text style={styles.statsLabel}>Total Workout</Text>
                    <Text style={styles.statsValue}>289</Text>
                </View>
            </View>

            <View style={styles.progressCircle}>
                <Text style={styles.progressText}>75%</Text>
                {/* Placeholder for circular progress - borders would be used in a real SVG implementation */}
                <View style={[styles.circleRing, { borderRightColor: 'transparent', borderBottomColor: 'transparent' }]} />
            </View>
        </View>
    </LinearGradient>
);

const ProgressChart = () => {
    const data = [
        { day: 'Mon', value: 40 },
        { day: 'Tue', value: 60 },
        { day: 'Wed', value: 50 },
        { day: 'Thu', value: 90 }, // Highlighted in image
        { day: 'Fri', value: 70 },
        { day: 'Sat', value: 55 },
    ];

    const maxValue = 100;

    return (
        <View style={styles.chartContainer}>
            <View style={styles.chartHeader}>
                <Text style={styles.chartTitle}>Progress Charts</Text>
                <Text style={styles.seeAllText}>See all &gt;</Text>
            </View>

            <View style={styles.chartBody}>
                {/* Y-Axis Labels */}
                <View style={styles.yAxis}>
                    <Text style={styles.axisLabel}>150</Text>
                    <Text style={styles.axisLabel}>100</Text>
                    <Text style={styles.axisLabel}>50</Text>
                    <Text style={styles.axisLabel}>0</Text>
                </View>

                {/* Bars */}
                <View style={styles.barsContainer}>
                    {data.map((item, index) => (
                        <View key={index} style={styles.barWrapper}>
                            <View style={styles.barTrack}>
                                <View
                                    style={[
                                        styles.barFill,
                                        {
                                            height: `${(item.value / maxValue) * 100}%`,
                                            backgroundColor: item.day === 'Thu' ? COLORS.primaryAccent : '#4A4A58'
                                        }
                                    ]}
                                />
                            </View>
                            <Text style={styles.dayLabel}>{item.day}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Header />
                <SummaryCard />
                <ProgressChart />
                {/* Another Card peek visible in image 'Stams' */}
                <View style={styles.glassCard}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.avatarContainer, { backgroundColor: COLORS.primaryAccent, marginRight: 15 }]}>
                            <MaterialCommunityIcons name="pause" size={20} color={COLORS.white} />
                        </View>
                        <Text style={styles.chartTitle}>Stams</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.inactiveText} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBackground,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100, // Space for Bottom Tab
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerSubtitle: {
        color: COLORS.inactiveText,
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4,
    },
    headerTitle: {
        color: COLORS.white,
        fontSize: 28,
        fontWeight: 'bold',
    },

    // Summary Card
    cardContainer: {
        borderRadius: 20,
        padding: 20,
        marginBottom: 25,
        height: 140, // Fixed height for consistency
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    statsContainer: {
        justifyContent: 'center',
    },
    statsLabel: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
    },
    statsValue: {
        color: COLORS.white,
        fontSize: 24,
        fontWeight: 'bold',
    },
    progressCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    circleRing: {
        position: 'absolute',
        top: -4, left: -4, right: -4, bottom: -4,
        borderWidth: 4,
        borderColor: COLORS.white, // Active part
        borderRadius: 34,
        transform: [{ rotate: '45deg' }],
    },
    progressText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: 'bold',
    },

    // Chart
    chartContainer: {
        backgroundColor: COLORS.secondaryBackground,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    chartHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    chartTitle: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    seeAllText: {
        color: COLORS.primaryAccent,
        fontSize: 14,
    },
    chartBody: {
        flexDirection: 'row',
        height: 150,
    },
    yAxis: {
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingBottom: 20, // Align with bar bottom
    },
    axisLabel: {
        color: COLORS.inactiveText,
        fontSize: 10,
    },
    barsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingBottom: 0,
    },
    barWrapper: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'flex-end',
    },
    barTrack: {
        width: 12, // Slender bars as per image
        height: '85%', // Leave space for labels
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        borderRadius: 6,
    },
    barFill: {
        width: '100%',
        borderRadius: 6,
    },
    dayLabel: {
        color: COLORS.inactiveText,
        fontSize: 10,
        marginTop: 8,
    },
    // Stams Card
    glassCard: {
        backgroundColor: COLORS.secondaryBackground,
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default HomeScreen;
