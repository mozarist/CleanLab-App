import { StyleSheet } from "react-native";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    gap: size.spacing.md,
    padding: size.spacing.lg,
    paddingBottom: size.spacing["8xl"],
  },
});
