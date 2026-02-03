import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FoodScreen from '../screens/FoodScreen';
import ScanFoodScreen from '../screens/ScanFoodScreen';

const Stack = createNativeStackNavigator();

const FoodNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FoodList" component={FoodScreen} />
            <Stack.Screen name="ScanFood" component={ScanFoodScreen} />
        </Stack.Navigator>
    );
};

export default FoodNavigator;
