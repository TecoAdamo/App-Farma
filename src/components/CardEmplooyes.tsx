import { View, Text, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigationRoutesProp } from '../routes/AuthRoutes';

interface Props {
    name: string

}

export default function CardEmplooyes({ name }: Props) {

    const navigation = useNavigation<AuthNavigationRoutesProp>();

    const handleCardClick = () => {
        navigation.navigate('EmplooyeScreen', { name: name });
    };
    return (
        <View style={tw`items-center top-1/8`}>
            <View style={tw`bottom-1/4 p-1 w-full rounded gap-4`}>
                <TouchableOpacity style={tw`flex-row items-center border border-gray-500 p-2 rounded gap-8`} onPress={handleCardClick}>
                    <Ionicons name="people-outline" size={28} color="#111827" />
                    <Text style={tw`font-bold right-1/8`}>Tela de Funcionários</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
