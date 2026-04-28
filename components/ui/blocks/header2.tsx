import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { styles } from "@/constants/styles";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";
import Button from "../button";

type headerProps = {
  title?: string;
};

export default function Header({
  title
}: headerProps) {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: size.spacing.sm,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <ArrowLeft
            size={size.iconSize.lg}
            color={colors.foreground}
            strokeWidth={2.2}
          />
        </Pressable>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}
