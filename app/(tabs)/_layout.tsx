import { Tabs } from 'expo-router';
import { BookOpen, Home as HomeIcon, Medal, Trophy, User } from 'lucide-react-native';
import React from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * Komponen Tab Bar kustom sesuai mockup.
 */
function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#fff',
      height: Platform.OS === 'ios' ? 90 : 70,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -10 },
      shadowOpacity: 0.05,
      shadowRadius: 15,
      elevation: 20,
      paddingBottom: Platform.OS === 'ios' ? 20 : 0,
      alignItems: 'center',
      paddingHorizontal: 10
    }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Render tombol "Lesson" (tengah) secara khusus agar floating
        if (route.name === 'lesson') {
          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={0.9}
              onPress={onPress}
              style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: '#5ea7e3', // Warna biru sesuai mockup
                borderWidth: 6,
                borderColor: '#fff',
                shadowColor: '#5ea7e3',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.3,
                shadowRadius: 10,
                elevation: 10,
              }}
            >
              <BookOpen size={28} color="#fff" />
              <Text style={{
                position: 'absolute',
                bottom: -25,
                color: isFocused ? '#5ea7e3' : '#94a3b8',
                fontSize: 12,
                fontWeight: '600'
              }}>
                Lesson
              </Text>
            </TouchableOpacity>
          );
        }

        // Render tab reguler
        const Icon = options.tabBarIcon;

        return (
          <TouchableOpacity
            key={route.key}
            activeOpacity={0.7}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            {Icon && Icon({ color: isFocused ? '#5ea7e3' : '#94a3b8', size: 24 })}
            <Text style={{
              color: isFocused ? '#5ea7e3' : '#94a3b8',
              fontSize: 10,
              marginTop: 4,
              fontWeight: '500'
            }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <HomeIcon size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="lesson"
        options={{
          title: 'Lesson',
        }}
      />
      <Tabs.Screen
        name="reward"
        options={{
          title: 'Reward',
          tabBarIcon: ({ color, size }) => <Medal size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />

      {/* Sembunyikan Explore bawaan */}
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
