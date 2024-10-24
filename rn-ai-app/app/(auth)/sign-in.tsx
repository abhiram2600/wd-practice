import FormField from "@/components/FormField";
import { images } from "@/constants";
import React, { useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [form, setForm] = useState({
    email: "",
    passoword: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full  px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white font-psemibold text-semibold mt-10">
            Log In
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChange={(e) => {
              setForm({ ...form, passoword: e });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
