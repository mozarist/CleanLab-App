import { StyleSheet } from "react-native";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.card,
  },
  container: {
    flex: 1,
    gap: size.spacing.md,
    backgroundColor: colors.background,
    padding: size.spacing.lg,
    paddingBottom: size.spacing["8xl"],
  },
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
    fontWeight: 700,
    letterSpacing: -1,
    color: colors.foreground,
  },
  bottomTab: {
    flexDirection: "row",
    alignItems: "center",
    gap: size.spacing.xs,
    backgroundColor: colors.card,
    paddingHorizontal: size.spacing.lg,
    paddingVertical: size.spacing.md,
    borderTopWidth: size.border.regular,
    borderColor: colors.border,
    zIndex: 2
  },
});
