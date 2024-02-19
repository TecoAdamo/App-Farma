import { View, Text } from 'react-native';

import tw from 'twrnc'
import PointRed from './PointRed';


export default function EmployeeStatus() {

    return (
        <View style={tw`w-full`}>

            <PointRed />
            <Text style={tw`font-bold mb-2 bg-red-200 border-red-600 border-2 p-1 w-4/8 text-center rounded-lg`}> Funcionário inativo</Text>


        </View>
    )
}

