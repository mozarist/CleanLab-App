import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { House, Compass, CircleUser, ScrollText } from 'lucide-react-native';
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
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          borderRadius: 24,
          height: 110,
          paddingTop: 12,
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <House size={32} strokeWidth={1.7} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <ScrollText size={32} strokeWidth={1.7} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <CircleUser size={32} strokeWidth={1.7} color={color} />,
        }}
      />
    </Tabs>
  );
}
