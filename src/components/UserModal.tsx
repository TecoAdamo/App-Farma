import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';

export default function UserModal({ visible, onClose }: any) {
    const [nameUser, setNameUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleSave = () => {

        if (nameUser.trim() !== '' && passwordUser.trim() !== '') {
            setErrorMessage('')
            onClose();
        } else {

            setErrorMessage("Preencha os campos antes de prosseguir.")

        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >

            <TouchableOpacity
                style={tw`absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50`}
                onPress={onClose}
            />
            <View style={tw`flex-1 justify-center items-center`}>
                <View style={tw`bg-white p-4 rounded-md w-80 z-10`}>
                    <Text style={tw`mb-4 font-bold text-xl text-center`}>Registrar usuários</Text>
                    <Text style={tw`mb-2 font-bold`}>Nome:</Text>
                    <TextInput
                        placeholder='Informe o nome:'
                        style={tw`border rounded p-2 mb-4`}
                        value={nameUser}
                        onChangeText={(text) => setNameUser(text)}
                    />
                    <Text style={tw`mb-2 font-bold`}>Senha:</Text>
                    <TextInput
                        placeholder='Informe a senha:'
                        style={tw`border rounded p-2 mb-4`}
                        value={passwordUser}
                        onChangeText={(text) => setPasswordUser(text)}
                    />
                    <Text style={tw`text-red-500 text-center mb-4`}>{errorMessage}</Text>
                    <TouchableOpacity onPress={handleSave}>
                        <Text style={tw`text-blue-500 text-center`}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
