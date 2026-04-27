import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/ui/text-input";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import Label from "@/components/ui/label";

export default function RegisterScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          minHeight: 700,
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          paddingHorizontal: size.spacing.xl,
          paddingVertical: size.spacing["4xl"],
          backgroundColor: "white",
        }}
      >
        <View style={{ alignItems: "center", gap: size.spacing.xs }}>
          <Text style={styles.heading}>Bergabung dengan Student Voice</Text>
        </View>

        <KeyboardAvoidingView
          style={{ width: "100%", gap: size.spacing.md }}
          behavior="padding"
          keyboardVerticalOffset={16}
        >
          <View style={{ width: "100%", gap: size.spacing.xs }}>
            <Label>Nama lengkap</Label>
            <Input placeholder="Masukkan nama lengkap Anda" />
          </View>
          <View style={{ width: "100%", gap: size.spacing.xs }}>
            <Label>Email</Label>
            <Input placeholder="example@gmail.com" />
          </View>
          <View style={{ width: "100%", gap: size.spacing.xs }}>
            <Label>Kata sandi</Label>
            <Input placeholder="Create a password" secureTextEntry={true} />
          </View>
          <View style={{ width: "100%", gap: size.spacing.xs }}>
            <Label>Konfirmasi kata sandi</Label>
            <Input placeholder="Confirm your password" secureTextEntry={true} />
          </View>
        </KeyboardAvoidingView>

        <View style={{ width: "100%", gap: size.spacing.lg }}>
          <Button
            onPress={() => router.push("/(tabs)")}
            label="Register"
            color={colors.primary}
          />
          <Text style={styles.text}>
            Already have an account?{" "}
            <Text
              onPress={() => router.push("/(auth)/login")}
              style={styles.link}
            >
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: colors.foreground,
    fontSize: size.fontSize["4xl"],
    fontWeight: 700,
    textAlign: "center",
    letterSpacing: -1.5,
  },
  text: {
    color: colors.text,
    fontSize: size.fontSize.sm,
    fontWeight: 500,
    textAlign: "center",
  },
  link: {
    color: colors.primary,
  },
});
