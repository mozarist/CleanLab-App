import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { House, CircleUser, ScrollText } from 'lucide-react-native';
import { colors } from '@/constants/color';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        tabBarStyle: {
          position: 'absolute',
          bottom: 50,
          backgroundColor: colors.card,
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 9999,
          width: '70%',
          height: 56,
          paddingTop: 10,
          paddingHorizontal: 24,
          marginHorizontal: '15%',
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <House size={32} strokeWidth={1.5} color={color} />,
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <ScrollText size={32} strokeWidth={1.5} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <CircleUser size={32} strokeWidth={1.5} color={color} />,
        }}
      />
    </Tabs>
  );
}
