import { colors } from '@/constants/color';
import * as size from '@/constants/size';
import { Check } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable } from 'react-native';

type RadioButtonProps = {
  disabled?: boolean;
  isDone?: boolean;
};

export default function RadioButton({disabled = false, isDone = false}: RadioButtonProps) {
  const [done, setDone] = useState(isDone);

  return (
    <Pressable
      onPress={() => setDone((prev) => !prev)}
      disabled={disabled}
      style={({ pressed }) => [{
        backgroundColor: done ? colors.primary : "transparent",
        borderWidth: size.border.regular,
        borderColor: done ? colors.primary : colors.muted+75,
        borderRadius: size.radius.full,
        padding: size.spacing.sm,
        maxWidth: size.iconSize.lg,
        maxHeight: size.iconSize.lg,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: pressed ? 0.7 : 1,
      }]}
      accessibilityRole="button"
      accessibilityLabel={done ? 'Mark as undone' : 'Mark as done'}
    >
      <Check size={size.iconSize.sm} color={done ? colors.primaryForeground : "transparent"} />
    </Pressable>
  );
}