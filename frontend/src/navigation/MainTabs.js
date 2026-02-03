import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import { CollabScreen, ProfileScreen } from '../screens/PlaceholderScreens';
import WorkoutNavigator from './WorkoutNavigator';
import FoodNavigator from './FoodNavigator';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, focused }) => {
    return (
        <View style={styles.iconContainer}>
            {focused && <View style={styles.activeIndicator} />}
            <MaterialCommunityIcons
                name={name}
                size={24}
                color={focused ? COLORS.primaryAccent : COLORS.inactiveText}
                style={styles.icon}
            />
        </View>
    );
};

const MainTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: COLORS.primaryAccent,
                tabBarInactiveTintColor: COLORS.inactiveText,
                tabBarShowLabel: true,
                tabBarLabelStyle: styles.tabLabel,
            }}
        >
            <Tab.Screen
                name="Collab"
                component={CollabScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon name="account-group" focused={focused} />,
                }}
            />
            <Tab.Screen
                name="Workout"
                component={WorkoutNavigator}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon name="dumbbell" focused={focused} />,
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon name="home-heart" focused={focused} />,
                }}
            />
            <Tab.Screen
                name="Food"
                component={FoodNavigator}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon name="food-apple" focused={focused} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon name="account" focused={focused} />,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.secondaryBackground,
        borderTopWidth: 0,
        elevation: 0,
        height: Platform.OS === 'ios' ? 85 : 60,
        paddingBottom: Platform.OS === 'ios' ? 25 : 8,
        paddingTop: 8,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tabLabel: {
        fontSize: 10,
        fontWeight: '600',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: 60,
    },
    activeIndicator: {
        position: 'absolute',
        top: -12, // Position above the icon, near top of tab bar
        width: 30, // Width of the line
        height: 3,
        backgroundColor: COLORS.primaryAccent,
        borderRadius: 2,
        shadowColor: COLORS.primaryAccent,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5, // Android glow
    },
    icon: {
        marginBottom: 0,
    }
});

export default MainTabs;
