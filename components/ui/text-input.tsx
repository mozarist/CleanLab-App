import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type TextInputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  radius?: string | number;
  icon?: React.ReactNode;
  onChangeText?: (text: string) => void;
};

export default function Input({
  placeholder,
  secureTextEntry,
  value,
  radius = size.radius.full,
  icon,
  onChangeText,
}: TextInputProps) {
  return (
    <View style={[styles.inputContainer, { borderRadius: radius }]}>
      {icon && <View>{icon}</View>}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: size.spacing.xs,
    backgroundColor: colors.card,
    borderWidth: size.border.thin,
    borderColor: colors.border,
    borderRadius: size.radius.full,
    paddingHorizontal: size.spacing.lg,
    paddingVertical: size.spacing.sm,
  },
  textInput: {
    width: "100%",
    fontSize: 16,
  },
});
