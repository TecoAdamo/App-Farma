import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';

import InputCpf from './InputMaskCpf';
import AdmissionDate from './AdmissionDate';


export default function EmplooyeModal({ visible, onClose }: any) {
    const [nameEmplooye, setNameEmplooye] = useState('');
    const [cpfEmplooye, setCpfEmplooye] = useState('');
    const [errorMessage, setErrorMessage] = useState<string>('')

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());


    const handleSave = () => {

        if (nameEmplooye.trim() !== '' && cpfEmplooye.trim() !== '') {
            setErrorMessage("")
            setNameEmplooye('')
            setCpfEmplooye('')
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
                    <Text style={tw`mb-4 font-bold text-xl text-center`}>Registrar funcionários</Text>
                    <Text style={tw`mb-2 font-bold`}>Nome:</Text>
                    <TextInput
                        placeholder='Informe o nome:'
                        style={tw`border rounded p-2 mb-4`}
                        value={nameEmplooye}
                        onChangeText={(text) => setNameEmplooye(text)}
                    />
                    <Text style={tw`mb-2 font-bold`}>CPF:</Text>
                    <InputCpf
                        value={cpfEmplooye}
                        onChangeText={(text) => setCpfEmplooye(text)}
                        style={tw`border p-2 rounded w-full mb-2`}
                    />
                    <AdmissionDate
                        selectedDate={selectedDate}
                        onDateChange={(date) => setSelectedDate(date)}
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
