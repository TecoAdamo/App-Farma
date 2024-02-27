import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';
import UserModal from './UserModal';

export default function RegisterUsern() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={tw`items-center top-1/8`}>
            <View style={tw`top-1/8 right-1/5 p-1 w-full rounded gap-4`}>
                <TouchableOpacity
                    style={tw`flex-row items-center bg-gray-900 p-2 rounded gap-4`}
                    onPress={toggleModal}
                >
                    <Ionicons name="people-outline" size={32} color="white" />
                    <Text style={tw`font-bold right-1/8 text-white`}>Cadastrar Usuários</Text>
                </TouchableOpacity>
            </View>
            <UserModal visible={isModalVisible} onClose={toggleModal} />
        </View>
    );
}

