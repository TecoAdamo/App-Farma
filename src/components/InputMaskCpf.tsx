import tw from 'twrnc'

import MaskInput from 'react-native-mask-input'

const CPF_MASK = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]

interface InputCpfProps {
    value: string;
    onChangeText: (text: string) => void;
}

export default function InputCpf({ value, onChangeText }: InputCpfProps) {

    return (
        <MaskInput
            style={tw`border p-2 top-1/8 rounded w-full`}
            placeholder='ex: 123.456.789-10'
            value={value}
            onChangeText={onChangeText}
            mask={CPF_MASK}
            keyboardType='numeric'
        />
    );
}

