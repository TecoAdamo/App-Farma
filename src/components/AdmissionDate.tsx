// DatePicker.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import tw from 'twrnc'

import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
}

export default function AdmissionDate({ selectedDate, onDateChange }: DatePickerProps) {
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event: any, date?: Date) => {
        setShowDatePicker(false);
        if (date) {
            onDateChange(date);
        }
    };

    const showDatePickerHandler = () => {
        setShowDatePicker(true);
    };

    return (
        <View style={tw`w-1/2 mt-2`}>
            <TouchableOpacity style={tw`border p-1 rounded`} onPress={showDatePickerHandler}>
                <Text style={tw`text-center`}>Data de admissão:</Text>
            </TouchableOpacity>
            {
                showDatePicker && (
                    <DateTimePicker
                        value={selectedDate}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                        locale='pt'
                    />
                )
            }
        </View >
    );
};
