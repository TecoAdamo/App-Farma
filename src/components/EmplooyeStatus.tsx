import { View, Text } from 'react-native';

import tw from 'twrnc'

import PointRed from './PointRed';
import PointGreen from './PointGreen';

type EmployeeStatusProps = {
    isActive: boolean
}

export default function EmployeeStatus({ isActive }: EmployeeStatusProps) {
    return (
        <View style={tw`w-full`}>
            {isActive ? (
                <PointGreen />
            ) : (
                <PointRed />
            )}
            <Text
                style={tw`font-bold mb-2 bg-${isActive ? 'green' : 'red'}-200 
            border-${isActive ? 'green' : 'red'}-600 border-2 p-2 w-4/8 text-center rounded-lg`}>
                {isActive ? 'Funcionário ativo' : 'Funcionário inativo'}
            </Text>
        </View>
    );
}

