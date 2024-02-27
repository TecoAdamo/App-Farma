import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import tw from 'twrnc';
import RegisterEmplooye from '../components/RegisterEmplooyes';
import Header from '../components/Header';

import ConsultEmplooye from '../components/ConsultEmplooye';


export default function EmplooyeScreen({ route }: any) {
    const { name } = route.params;


    return (
        <View style={tw`flex-1 items-center`}>
            <Header name={name} />
            <RegisterEmplooye />
            <ConsultEmplooye />
        </View>
    );
}
