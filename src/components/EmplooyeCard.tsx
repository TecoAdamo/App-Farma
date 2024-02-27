import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function EmplooyeCard() {
    return (
        <View style={tw`bg-white rounded-md p-4 bottom-1/2 m-4 shadow-md flex-row gap-4`}>
            <Text style={tw`text-lg font-bold mb-2`}>
                Nome:
            </Text>
            <Text style={tw`text-lg`}>
                Fulano
            </Text>

        </View>
    );
};


