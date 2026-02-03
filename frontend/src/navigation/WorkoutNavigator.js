import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExerciseListScreen from '../screens/ExerciseListScreen';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';
import WorkoutPlayerScreen from '../screens/WorkoutPlayerScreen';

const Stack = createNativeStackNavigator();

const WorkoutNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ExerciseList" component={ExerciseListScreen} />
            <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} />
            <Stack.Screen name="WorkoutPlayer" component={WorkoutPlayerScreen} />
        </Stack.Navigator>
    );
};

export default WorkoutNavigator;
