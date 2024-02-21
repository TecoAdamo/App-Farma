import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';
import { AuthNavigationRoutesProp } from '../routes/AuthRoutes';



export default function CardUsers() {

    const navigation = useNavigation<AuthNavigationRoutesProp>();

    const handleCardClick = () => {
        navigation.navigate('UserScreen');
    };

    return (
        <View style={tw` items-center top-1/8`}>


            <View style={tw`bottom-1/4 p-1 w-full rounded gap-4`}>
                <TouchableOpacity
                    style={tw`flex-row items-center border border-gray-500 p-2 rounded gap-8`}
                    onPress={handleCardClick}
                >
                    <Ionicons name="person-outline" size={32} color="#111827" />
                    <Text style={tw`font-bold right-1/8`}>Tela de Usuários</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
