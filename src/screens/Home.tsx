import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';


import tw from 'twrnc'
import CardComp from '../components/Card';

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<{}>; // Substitua {} pelo tipo do seu NativeStackNavigator, se aplicável
};

export default function Home({ navigation }: HomeScreenProps) {



    return (
        <View style={tw`flex-1 items-center justify-center bg`}>
            <CardComp navigation={navigation} />
            <StatusBar style="auto" />
        </View>
    );
}