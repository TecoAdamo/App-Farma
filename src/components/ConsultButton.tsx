import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';

interface ConsultButtonProps {
    onPress: (event: GestureResponderEvent) => void;
}

const ConsultButton: React.FC<ConsultButtonProps> = ({ onPress }) => {


    return (
        <View style={tw`flex-1 items-center justify-center mt-12`}>
            <View style={tw`bottom-6/8 right-1/3 p-2`}>
                <TouchableOpacity style={tw`bg-green-800 p-2 rounded`} onPress={onPress}>
                    <Text style={tw`text-white font-bold`}>Consultar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default ConsultButton;