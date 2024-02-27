// import tw from 'twrnc'

// import MaskInput from 'react-native-mask-input'

// const CPF_MASK = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]

// interface InputCpfProps {
//     value: string;
//     onChangeText: (text: string) => void;
// }

// export default function InputCpf({ value, onChangeText }: InputCpfProps) {

//     return (
//         <MaskInput
//             style={tw`border p-2 top-1/8 rounded w-full`}
//             placeholder='ex: 123.456.789-10'
//             value={value}
//             onChangeText={onChangeText}
//             mask={CPF_MASK}
//             keyboardType='numeric'
//         />
//     );
// }

import React from 'react';
import MaskInput from 'react-native-mask-input';
import { ViewStyle } from 'react-native';  // Importando o tipo de estilo

const CPF_MASK = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

interface InputCpfProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    mask?: Array<RegExp>;
    keyboardType?: string;
    style?: ViewStyle;  // Adicionando a propriedade de estilo
}

const InputCpf: React.FC<InputCpfProps> = ({ value, onChangeText, placeholder, mask = CPF_MASK, keyboardType, style }) => {
    return (
        <MaskInput
            style={style}  // Usando o estilo fornecido como prop
            placeholder={placeholder || 'ex: 123.456.789-10'}
            value={value}
            onChangeText={onChangeText}
            mask={mask}
            keyboardType='numeric'
        />
    );
}

export default InputCpf;
