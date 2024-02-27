import { View, Text } from 'react-native';

import tw from 'twrnc';

import Header from '../components/Header';
import RegisterUser from '../components/RegisterUserBtn';

import ConsultUser from '../components/ConsultUser';

export default function UserScreen({ route }: any) {
    const { name } = route.params;

    return (
        <View style={tw`flex-1 items-center `}>
            <Header name={name} />
            <RegisterUser />
            <ConsultUser />
        </View>
    );
}
