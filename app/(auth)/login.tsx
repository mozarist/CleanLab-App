import { router } from "expo-router";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Button from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/ui/text-input";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import Label from "@/components/ui/label";
import { WashingMachine } from "lucide-react-native";

export default function LoginScreen() {
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
          <Input placeholder="Masukan email yang sudah terdaftar" />
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
          <Input placeholder="Masukan password anda" secureTextEntry={true} />
        </View>
      </KeyboardAvoidingView>

      <View style={{ width: "100%", gap: size.spacing.lg }}>
        <Button
          onPress={() => router.push("/(tabs)")}
          label="Login"
          color={colors.primary}
        />
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
