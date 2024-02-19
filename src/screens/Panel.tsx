import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import tw from 'twrnc';



export default function Panel() {



    return (
        <View style={tw`flex-1 items-center justify-center`}>

            <Text style={tw`font-bold mb-6`}>Bem vindo User</Text>
        </View>
    );
}
