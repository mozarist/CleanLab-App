import { Text, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import * as Icons from 'lucide-react-native'
import { colors } from '@/constants/color';
import * as size from '@/constants/size';

type IconName = {
    [K in keyof typeof Icons]: typeof Icons[K] extends React.ComponentType<any> ? K : never
}[keyof typeof Icons]

type ListItemProps = {
    title: string
    iconName?: IconName
    iconColor?: string
    titleColor?: string
    onPress: () => void
}

export default function ListItem({ title, iconName = "User", iconColor = colors.primary, titleColor = colors.foreground, onPress }: ListItemProps) {
    const IconComponent = Icons[iconName] as React.ComponentType<{ size?: number; color?: string }>;

    return (
        <Pressable onPress={onPress} style={styles.ListItem}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: size.spacing.md }}>
                <View style={ styles.iconContainer }>
                    <IconComponent size={size.iconSize.lg} color={iconColor} />
                </View>
                <Text style={[styles.itemLabel, { color: titleColor }]}>{title}</Text>
            </View>

            <Icons.ChevronRight size={size.iconSize.lg} color="gray" />
        </Pressable >
    )
}

const styles = StyleSheet.create({
    ListItem: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', gap: size.spacing.md, 
    },
    iconContainer: {
        padding: size.spacing.sm,
        backgroundColor: colors.accent,
    },
    itemLabel: {
        fontSize: size.fontSize.md,
        fontWeight: '500',
    },
});
