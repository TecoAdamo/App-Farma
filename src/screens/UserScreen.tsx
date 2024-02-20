import { View, Text } from 'react-native';

import tw from 'twrnc';

export default function UserScreen() {

    return (
        <View style={tw`flex-1 items-center top-1/8`}>
            <Text style={tw`font-bold mb-2 `}>Tela de Usuários</Text>
        </View>
    );
}
