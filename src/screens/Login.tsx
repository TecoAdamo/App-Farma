import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useIsFocused, useNavigation } from '@react-navigation/native';

import tw from 'twrnc';

import { AuthNavigationRoutesProp } from './../routes/AuthRoutes';


export default function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('')


    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) {
            setShowPassword(false);
        }
    }, [isFocused]);

    const navigation = useNavigation<AuthNavigationRoutesProp>();

    const handleButtonClick = () => {
        if (name === '' || password === '') {
            setErrorMessage("Preencha os campos antes de prosseguir.")
            return
        } else {
            setName('');
            setPassword('');
            setErrorMessage('')
            setShowPassword(true);

            navigation.navigate("Panel", { name: name });
        }
    };


    return (
        <View style={tw`flex-1 items-center justify-center`}>
            <View style={tw`w-full p-4 h-2/4`}>
                <Text style={tw`font-bold mb-6`}>Acesse o painel</Text>

                <TextInput
                    label="Nome:"
                    value={name}
                    onChangeText={setName}
                    style={tw`w-10/10 mb-4`}
                />
                <TextInput
                    label="Password:"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    right={
                        <TextInput.Icon
                            icon={() => (
                                <Icon
                                    name={showPassword ? 'eye-slash' : 'eye'}
                                    size={20}
                                    color={'gray'}
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                            )}
                        />
                    }
                    style={tw`w-10/10`}
                />
                <Text style={tw`text-red-500 text-center mt-2`}>{errorMessage}</Text>
                <TouchableOpacity onPress={handleButtonClick}>
                    <Text style={tw`text-center font-bold top-2/2 border p-2 bg-gray-700 text-white rounded`}>Acessar painel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
