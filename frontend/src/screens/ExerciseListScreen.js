import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { getExercises } from '../services/api';

const ExerciseCard = ({ item, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.cardLeft}>
            <Image source={{ uri: item.image_url }} style={styles.thumbnail} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
        </View>
        <View style={styles.cardRight}>
            {/* Muscle Anatomy Icon Placeholder - simulating the highlighted muscle guy */}
            <MaterialCommunityIcons name="human-handsup" size={30} color={COLORS.inactiveText} />
            <Text style={styles.muscleText}>{item.muscle_group}</Text>
        </View>
    </TouchableOpacity>
);

const ExerciseListScreen = ({ navigation }) => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        getExercises().then(data => setExercises(data));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Exercises</Text>
            </View>
            <FlatList
                data={exercises}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ExerciseCard
                        item={item}
                        onPress={() => navigation.navigate('WorkoutDetail', { id: item.id })}
                    />
                )}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBackground,
    },
    header: {
        padding: 20,
        paddingBottom: 10,
    },
    headerTitle: {
        color: COLORS.white,
        fontSize: 28,
        fontWeight: 'bold',
    },
    listContent: {
        padding: 20,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.secondaryBackground,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    thumbnail: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#333',
    },
    textContainer: {
        marginLeft: 15,
        flex: 1, // Allow text to wrap if needed
    },
    title: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        textTransform: 'uppercase', // Matching reference style
    },
    subtitle: {
        color: COLORS.inactiveText,
        fontSize: 12,
    },
    cardRight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
    },
    muscleText: {
        color: COLORS.inactiveText,
        fontSize: 8,
        marginTop: 4,
    }
});

export default ExerciseListScreen;
