import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import tw from 'twrnc'
import CardComp from '../components/Card';

export default function Home() {



    return (
        <View style={tw`flex-1 items-center justify-center bg`}>
            <CardComp />
            <StatusBar style="auto" />
        </View>
    );
}