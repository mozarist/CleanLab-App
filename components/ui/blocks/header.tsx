import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { Speech, Bell, Plus } from "lucide-react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Plus size={size.iconSize.lg} color={colors.foreground} strokeWidth={2.2} />

      <View style={{ flexDirection: "row", alignItems: "center", gap: size.spacing.sm }}>
        <Text style={styles.headerText}>StudentVoice</Text>
      </View>

      <Bell size={size.iconSize.lg} color={colors.foreground} strokeWidth={2.2} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.card,
    paddingHorizontal: size.spacing.xl,
    paddingVertical: size.spacing.lg,
    borderBottomWidth: size.border.regular,
    borderColor: colors.border,
    zIndex: 100,
  },
  headerText: {
    fontSize: size.fontSize.xl,
    fontWeight: 600,
    letterSpacing: -1,
    color: colors.foreground,
  },
});
