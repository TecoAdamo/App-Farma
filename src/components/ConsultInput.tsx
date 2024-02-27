import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';

export default function ConsultInput() {
    return (
        <View style={tw`flex-1 p-6 gap-4 `}>
            <View style={tw`top-1/2 max-w-[23.75rem] flex flex-col gap-2`}>
                <TextInput
                    style={tw`border border-gray-400 p-2 rounded w-full mt-6`}
                    placeholder='ex: Informe o nome'

                />
            </View>
        </View>
    );
}
