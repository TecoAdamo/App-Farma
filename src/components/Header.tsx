import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigationRoutesProp } from '../routes/AuthRoutes';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    name: string

}

export default function Header({ name, children }: Props) {
    const navigation = useNavigation<AuthNavigationRoutesProp>();

    const handleLogout = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={tw`items-center top-1/8`}>
            <Text style={tw`font-bold mb-2 `}>Painel administrativo</Text>
            <Text style={tw`mb-6`}>Bem vindo {name}</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={32} color="#111827" style={tw`left-2/5 bottom-4/2`} />
            </TouchableOpacity>
            <Text style={tw`font-bold text-xl right-2/8`}>Menu</Text>
            {children}
        </View>
    );
}
