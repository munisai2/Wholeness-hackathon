import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const createPlaceholderScreen = (name) => {
    return () => (
        <View style={styles.container}>
            <Text style={styles.text}>{name} Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBackground,
    },
    text: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export const CollabScreen = createPlaceholderScreen('Collab');
export const WorkoutScreen = createPlaceholderScreen('Workout');
export const FoodScreen = createPlaceholderScreen('Food');
export const ProfileScreen = createPlaceholderScreen('Profile');
