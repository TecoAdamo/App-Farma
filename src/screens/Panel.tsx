import React from 'react';
import { View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';

import CardEmplooyes from '../components/CardEmplooyes';
import CardUsers from '../components/CardUsers';

import Header from '../components/Header';


export default function Panel({ route }: any) {
    const { name } = route.params;

    return (
        <View style={tw`flex-1 items-center `}>
            <Header name={name}>
                <View style={tw`right-1/8 mt-2`}>

                    <CardUsers name={name} />
                    <CardEmplooyes name={name} />
                </View>
            </Header>
        </View>
    );
}
