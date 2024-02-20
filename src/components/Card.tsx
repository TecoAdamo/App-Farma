import { Alert, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';

import tw from 'twrnc'
import InputCpf from './InputMaskCpf';

import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

export default function CardComp() {
    const [cpf, setCpf] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('')

    const navigation = useNavigation();

    const handleButtonClick = () => {
        const cleanedCpf = cpf.replace(/\D/g, '');

        if (!cleanedCpf || cleanedCpf.length !== 11) {
            setErrorMessage('Por favor, preencha o campo com um CPF válido.');
        } else {
            setCpf('');
            setErrorMessage('')
            navigation.navigate('CardData');
        }
    };

    return (
        <Card style={tw`p-6 rounded-2xl bg-gray-100`}>

            <Text
                style={tw`mb-2.5 font-bold`}
                variant="titleLarge">Consulte o funcionário
            </Text>
            <Text variant="bodyMedium">Informe o CPF para encontrar e verificar se o funcionário esta na empresa.</Text>
            <Text
                variant="bodyMedium"
                style={tw`font-extrabold top-1/8 mb-4`}
            >
                Informe o CPF:
            </Text>


            <InputCpf value={cpf} onChangeText={setCpf} />
            <Text
                variant="bodyMedium"
                style={tw`text-red-500 top-1/6`}
            >
                {errorMessage}
            </Text>

            <TouchableOpacity
                onPress={handleButtonClick}
                style={tw`rounded p-2 mt-16 mb-4 border border-stone-400 w-4/6 left-1/6 bg-gray-700`}>
                <Text style={tw`text-center font-bold text-white`}>Buscar</Text>
            </TouchableOpacity>

        </Card>
    )
}

