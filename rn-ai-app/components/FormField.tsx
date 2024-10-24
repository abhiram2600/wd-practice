import React from "react";
import { View, Text, TextInput } from "react-native";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChange: (text: string) => void;
  otherStyles?: string;
  keyboardType?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <View className={`space-y-2`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounderd-2xl focus:border-secondary items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChange}
        />
      </View>
    </View>
  );
};

export default FormField;
