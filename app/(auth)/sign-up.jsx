import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const signUp = () => {
    const { username, email, password } = form;
    createUser(username, email, password);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-6 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white mt-10 font-psemibold">
            Sign up to Aora
          </Text>

          {/* Username */}
          <FormField
            title="Username"
            placeholder="Enter your email username"
            value={form.username}
            handleTextChange={(e) =>
              setForm({
                ...form,
                username: e,
              })
            }
            otherStyles="mt-10"
          />

          {/* Email */}
          <FormField
            title="Email"
            placeholder="Enter your email address"
            value={form.email}
            handleTextChange={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          {/* Password */}
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleTextChange={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
            otherStyles="mt-7"
          />

          <CustomButton
            isLoading={isSubmitting}
            title="Sign up"
            handlePress={signUp}
            containerStyles="mt-7"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already ?
            </Text>
            <Link
              href="sign-in"
              className="font-psemibold text-lg text-secondary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
