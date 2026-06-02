import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { styles } from "@/constants/styles";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { WashingMachine } from "lucide-react-native";
import { router } from "expo-router";

export default function Header() {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: size.spacing.xs,
        }}
      >
        <WashingMachine
          size={size.iconSize.lg}
          color={colors.primary}
        />
        <Text style={styles.headerText}>CleanLab</Text>
      </View>
    </View>
  );
}
