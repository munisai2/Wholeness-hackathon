import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { getFoods } from '../services/api';

const FoodCard = ({ item }) => (
    <View style={styles.card}>
        <Image source={{ uri: item.image_url }} style={styles.thumbnail} />
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.macros}>{item.macros}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.inactiveText} />
    </View>
);

const FoodScreen = ({ navigation }) => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        getFoods().then(data => setFoods(data));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nutrition</Text>
            </View>

            <FlatList
                data={foods}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <FoodCard item={item} />}
                contentContainerStyle={styles.listContent}
            />

            {/* Quick Scan FAB */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('ScanFood')}
            >
                <MaterialCommunityIcons name="camera" size={28} color={COLORS.white} />
            </TouchableOpacity>
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
        alignItems: 'center',
        backgroundColor: COLORS.secondaryBackground,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
    },
    thumbnail: {
        width: 60,
        height: 60,
        borderRadius: 30, // Circular image for food
        backgroundColor: '#333',
    },
    textContainer: {
        marginLeft: 15,
        flex: 1,
    },
    name: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    macros: {
        color: COLORS.inactiveText,
        fontSize: 12,
    },
    fab: {
        position: 'absolute',
        bottom: 30, // Above bottom tab bar space
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.primaryAccent, // #2979FF
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    }
});

export default FoodScreen;
