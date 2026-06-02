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
  autoCapitalize?: "none" | "words" | "sentences" | "characters";
  autoComplete?: "off" | "username" | "password" | "email" | "name" | "tel" | "street-address" | "postal-code" | "cc-number" | "cc-exp" | "cc-csc" | "cc-exp-month" | "cc-exp-year";
  keyboardType?: "default" | "number-pad" | "decimal-pad" | "email-address" | "phone-pad";
};

export default function Input({
  placeholder,
  secureTextEntry,
  value,
  radius = size.radius.full,
  icon,
  onChangeText,
  autoCapitalize = "none",
  autoComplete = "off",
  keyboardType = "default"
}: TextInputProps) {
  return (
    <View style={[styles.inputContainer, { borderRadius: radius }]}>
      {icon && <View>{icon}</View>}
      <TextInput
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
        placeholder={placeholder}
        placeholderTextColor={colors.mutedForeground}
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
    paddingVertical: size.spacing.xs,
  },
  textInput: {
    width: "100%",
    fontSize: 16,
    color: colors.primary,
  },
});
