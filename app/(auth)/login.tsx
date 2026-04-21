import { Image } from "expo-image";
import { router } from "expo-router";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Button from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/ui/text-input";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import Label from "@/components/ui/label";
import LottieView from "lottie-react-native";

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
      <LottieView
          source={require("@/assets/animations/creative-notes.json")}
          autoPlay
          loop
          speed={1}
          style={{ width: 450, height: 200 }}
        />
        
      <View style={{ alignItems: "center", gap: size.spacing.xs }}>
        <Text style={styles.heading}>Student Voice</Text>
      </View>

      <KeyboardAvoidingView
        style={{ width: "100%", gap: size.spacing.md }}
        behavior="padding"
        keyboardVerticalOffset={16}
      >
        <View style={{ width: "100%", gap: size.spacing.xs }}>
          <Label>Email</Label>
          <Input placeholder="Enter your registered email" />
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
            <Text
              style={{ color: colors.primary, fontSize: size.fontSize.xs, fontWeight: 500 }}
              onPress={() => router.push("/(tabs)")}
            >
              Lupa Password?
            </Text>
          </View>
          <Input placeholder="Enter your password" secureTextEntry={true} />
        </View>
      </KeyboardAvoidingView>

      <View style={{ width: "100%", gap: size.spacing.lg }}>
        <Button
          onPress={() => router.push("/(tabs)")}
          label="Login"
          color={colors.primary}
        />
        <Text style={styles.text}>
          No account yet?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/(auth)/register")}
          >
            Register
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
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
