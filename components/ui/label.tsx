import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@/constants/color';
import * as size from '@/constants/size';

type LabelProps = {
    children: React.ReactNode;
    color?: string;
};

export default function Label({ children, color = colors.text }: LabelProps) {
  return (
      <Text style={[styles.label, { color }]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  label: {
    color: colors.mutedForeground,
    fontSize: size.fontSize.xs,
    fontWeight: 400,
    letterSpacing: 0.5,
  }
});