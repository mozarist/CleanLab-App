import { router } from "expo-router";
import { Alert, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Button from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/ui/text-input";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import Label from "@/components/ui/label";
import { WashingMachine } from "lucide-react-native";
import { login } from "@/services/auth";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function LoginScreen() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  async function handleLogin() {
  try {

    setLoading(true);
    setError("");

    const data = await login(
      email,
      password
    );

    console.log(data);

    await SecureStore.setItemAsync(
      "token",
      data.token
    );
    
    router.replace("/(tabs)");

  } catch (err: any) {

    console.log(err);

    setError(
      err?.response?.data?.message ??
      "Login failed"
    );

  } finally {

    setLoading(false);

  }
}

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        height: "100%",
        paddingHorizontal: 24,
        paddingVertical: 64,
        backgroundColor: "white",
      }}
    >
      <View style={{ alignItems: "center", gap: size.spacing.xs }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: size.spacing.xs,
          }}
        >
          <WashingMachine size={size.iconSize["2xl"]} color={colors.primary} />
          <Text style={styles.heading}>CleanLab</Text>
        </View>
        <Text style={styles.text}>Masuk untuk melanjutkan</Text>
      </View>

      <KeyboardAvoidingView
        style={{ width: "100%", gap: size.spacing.md }}
        behavior="padding"
        keyboardVerticalOffset={16}
      >
        <View style={{ width: "100%", gap: size.spacing.xs }}>
          <Label>Email</Label>
          <Input
            placeholder="Masukan email yang sudah terdaftar"
            autoComplete="email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={{ width: "100%", gap: size.spacing.xs }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Label>Password</Label>
          </View>
          <Input
            placeholder="Masukan password anda"
            autoComplete="password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </KeyboardAvoidingView>

      <View style={{ width: "100%", gap: size.spacing.lg }}>
        <Button
          onPress={handleLogin}
          label={loading ? "Loading..." : "Masuk"}
          color={colors.primary}
          loading={loading}
        />
        {error ? (
          <Text
            style={{
              fontSize: size.fontSize.xs,
              color: colors.destructive,
              textAlign: "center",
            }}
          >
            {error}
          </Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: colors.primary,
    fontSize: size.fontSize["3xl"],
    fontWeight: 500,
    textAlign: "center",
    letterSpacing: -1.5,
  },
  text: {
    color: colors.mutedForeground,
    fontSize: size.fontSize.sm,
    textAlign: "center",
  },
  link: {
    color: colors.primary,
  },
});
