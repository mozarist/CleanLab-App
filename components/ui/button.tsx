import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { Image } from "expo-image";
import type { LucideIcon, LucideProps } from "lucide-react-native";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type ButtonProps = {
  label?: React.ReactNode;
  color?: string;
  labelColor?: string;
  labelSize?: keyof typeof size.fontSize;
  OutlineColor?: string;
  rounded?: string | number;
  icon?: LucideIcon;
  iconProps?: Partial<LucideProps>;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function Button({
  label,
  color = colors.primary,
  rounded = size.radius.full,
  labelColor = colors.primaryForeground,
  labelSize = "md",
  OutlineColor = "transparent",
  icon: Icon,
  iconProps,
  onPress = () => {},
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: color,
          borderColor: OutlineColor,
          borderRadius: rounded,
        },
        style,
      ]}
    >
      {Icon ? (
        <Icon
          color={iconProps?.color ?? labelColor}
          size={iconProps?.size ?? size.fontSize.lg}
          {...iconProps}
        />
      ) : null}
      {label && (
        <Text style={{...styles.text, color: labelColor, fontSize: size.fontSize[labelSize],}}
      >
        {label}
      </Text>)}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: size.spacing.md,
    paddingHorizontal: size.spacing.lg,
    borderRadius: size.radius.sm,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  text: {
    fontSize: size.fontSize.md,
    fontWeight: "500",
    textTransform: "capitalize",
    paddingHorizontal: size.spacing.xxs,
  },
});
