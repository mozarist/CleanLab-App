import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { styles } from "@/constants/styles";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { Bell, SquarePen } from "lucide-react-native";
import { router } from "expo-router";

export default function Header() {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => router.push("/create")}>
        <SquarePen
          size={size.iconSize.lg}
          color={colors.foreground}
          strokeWidth={2.2}
        />
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: size.spacing.sm,
        }}
      >
        <Text style={styles.headerText}>StudentVoice</Text>
      </View>

      <Bell
        size={size.iconSize.lg}
        color={colors.foreground}
        strokeWidth={2.2}
      />
    </View>
  );
}
