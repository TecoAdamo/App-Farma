import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';

import CardEmplooyes from '../components/CardEmplooyes';
import CardUsers from '../components/CardUsers';
import { useNavigation } from '@react-navigation/native';


export default function Panel() {
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={tw`flex-1 items-center top-1/8`}>
            <Text style={tw`font-bold mb-2 `}>Painel administrativo</Text>
            <Text style={tw`mb-6`}>Bem vindo User</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={32} color="#111827" style={tw`left-2/5 bottom-4/2`} />
            </TouchableOpacity>
            <Text style={tw`font-bold text-xl right-2/8`}>Menus</Text>
            <View style={tw`right-1/8 mt-2`}>
                <CardUsers />
                <CardEmplooyes />
            </View>
        </View>
    );
}
