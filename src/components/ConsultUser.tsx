import React, { useState } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import ConsultButton from './ConsultButton';
import ConsultInput from './ConsultInput';
import UserCard from './UserCard';

export default function ConsultUser() {
    const [showUserCard, setShowUserCard] = useState(false);

    const handleConsultButtonClick = () => {
        setShowUserCard(true);
    };

    return (
        <View style={tw`flex-1 w-full`}>
            <View style={tw`top-1/5 pl-8 mb-4`}>
                <Text style={tw`font-extrabold text-lg`}>Consultar usuários</Text>
            </View>
            <ConsultInput />
            <ConsultButton onPress={handleConsultButtonClick} />

            {showUserCard && <UserCard />}
        </View>
    );
}
