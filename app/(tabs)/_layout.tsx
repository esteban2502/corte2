import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: '#2e4abf'
          },
          android:{
            backgroundColor: '#2e4abf'
          },
          default: {
            backgroundColor: '#2e4abf'
          },
          
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Calculadora',
          tabBarIcon: ({ color }) => <Entypo name="calculator" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="infographic"
        options={{
          title: 'Infografias',
          tabBarIcon: ({ color }) => <FontAwesome5 name="newspaper" size={24} color="white" />,
        }}
      />
    </Tabs>
  );
}
