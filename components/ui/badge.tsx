import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@/constants/color';
import * as size from '@/constants/size';

type BadgeProps = {
    children: React.ReactNode;
    color?: string;
    labelColor?: string;
    style?: object;
};

export default function Badge({ children, color = colors.muted + 25, labelColor = colors.text, style }: BadgeProps) {
    return (
        <View style={[styles.badge, { backgroundColor: color }, style]}>
            <Text style={[styles.label, { color: labelColor }]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        backgroundColor: colors.accent,
        paddingHorizontal: size.spacing.sm,
        paddingVertical: size.spacing.xxs,
        borderRadius: size.radius.full,
    },
    label: {
        color: colors.text,
        fontSize: size.fontSize.xs,
        fontWeight: "500",
        letterSpacing: -0.5,
        textTransform: "uppercase",
        textAlign: "center",
    }
});