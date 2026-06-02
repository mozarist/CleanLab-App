import { StyleSheet, Pressable } from "react-native";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";

type CardProps = {
  color?: string;
  borderColor?: string;
  borderThickness?: string | number;
  borderType?: "solid" | "dashed" | "dotted";
  children?: React.ReactNode;
  onPress?: () => void;
};

export default function Card({ color = colors.card, borderColor = colors.border, borderThickness = 1, borderType = "solid", children, onPress = () => {} }: CardProps) {
  return (
    <Pressable style={{ ...styles.card, backgroundColor: color, borderColor: borderColor, borderWidth: typeof borderThickness === 'string' ? parseInt(borderThickness) : borderThickness, borderStyle: borderType }} onPress={onPress}>
      { children }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    gap: size.spacing.sm,
    backgroundColor: colors.card,
    borderRadius: size.radius.xl,
    padding: size.spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
