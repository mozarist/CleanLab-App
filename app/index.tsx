import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default function Index() {
  useEffect(() => {
    async function checkAuth() {
      try {
        const token =
          await SecureStore.getItemAsync(
            "token"
          );

        if (token) {
          router.replace(
            "/(tabs)"
          );
        } else {
          router.replace(
            "/login"
          );
        }

      } catch (error) {

        console.log(
          "Auth check error:",
          error
        );

        router.replace(
          "/login"
        );
      }
    }

    checkAuth();

  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        size="large"
      />
    </View>
  );
}