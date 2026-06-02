import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
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
    paddingHorizontal: size.spacing.lg,
    paddingVertical: size.spacing.lg,
    borderBottomWidth: size.border.regular,
    borderColor: colors.border,
    zIndex: 100,
  },
  headerText: {
    fontSize: size.fontSize.xl,
    fontWeight: 500,
    letterSpacing: -1,
    color: colors.primary,
  },
  title: {
    fontSize: size.fontSize.lg,
    fontWeight: 500,
    color: colors.foreground,
  },
  subtitle: {
    fontSize: size.fontSize.sm,
    color: colors.mutedForeground,
  },
  summaryTitle: {
    color: colors.primary,
    fontSize: size.fontSize['2xl'],
    fontWeight: 600,
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
    zIndex: 2,
  },
});
