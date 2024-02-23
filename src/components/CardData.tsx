import { TouchableOpacity, View, Text } from 'react-native';

import tw from 'twrnc'
import EmployeeStatus from './EmplooyeStatus';

import { AuthNavigationRoutesProp } from '../routes/AuthRoutes';
import { useNavigation } from '@react-navigation/native';


export default function CardData() {
    const navigation = useNavigation<AuthNavigationRoutesProp>();

    const handleButtonClick = () => {

        navigation.navigate('Home');

    };
    return (

        <View style={tw`flex-1 items-center justify-center p-4`}>
            <View style={tw`bg-gray-100 rounded items-center h-2/6 w-full p-6 rounded-2xl shadow-xl`}>
                <View style={tw`w-full`}>
                    <Text style={tw`font-extrabold text-gray-700 text-xl mb-6`}>Funcionário</Text>
                    <Text style={tw`font-bold mb-2`}>Nome: Mateus Adamo Lamin</Text>
                    <Text style={tw`font-bold mb-2`}>CPF: 123.456.789-10</Text>

                    <EmployeeStatus isActive={true} />

                </View>
                <View style={tw`rounded p-2 w-full mt-2 border border-gray-600 bg-gray-700`}>

                    <TouchableOpacity onPress={handleButtonClick}>
                        <Text style={tw`text-center font-bold  text-white`}>Consultar novamente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>




    )
}

