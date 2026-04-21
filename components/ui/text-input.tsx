import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";

type TextInputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function Input({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}: TextInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.muted}
      style={styles.textInput}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    backgroundColor: colors.card,
    borderWidth: size.border.thin,
    borderColor: colors.border,
    borderRadius: size.radius.sm,
    paddingHorizontal: size.spacing.md,
    paddingVertical: size.spacing.md,
    fontSize: 16,
  },
});
