import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Bell, Play, Zap } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function index() {
  return (
    <LinearGradient
      colors={['#ffffff', '#BD9CD14D', '#ffffff']}
      locations={[0.2, 0.5, 0.8]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, padding: 20 }}>

        {/* Header */}
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <View>
            <Text style={{ fontSize: 20, color: 'gray', fontWeight: 'bold' }}>Selamat Datang,</Text>
            <Text style={{ fontSize: 18, color: 'gray' }}>Gloria!</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Zap color="gray" size={24} />
            <Bell color="gray" fill={'gray'} size={24} />
          </View>
        </View>

        {/* Banner Card */}
        <View style={{
          marginTop: 24,
          backgroundColor: '#B01E24',
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'flex-end',
          overflow: 'hidden',
          height: 160,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 6,
        }}>
          {/* Gambar Wanita */}
          <Image
            source={require('../../assets/images/Home-Banner.png')}
            style={{
              width: 130,
              height: 190,
              marginBottom: 0,
            }}
            contentFit="contain"
            contentPosition="bottom"
          />

          {/* Konten Teks */}
          <View style={{ flex: 1, paddingVertical: 16, paddingHorizontal: 12, paddingRight: 16 }}>
            <Text style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 6,
              lineHeight: 22,
            }}>
              Dasar Keuangan Bisnis
            </Text>
            <Text style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 12,
              lineHeight: 18,
              marginBottom: 14,
            }}>
              Sukses butuh perjuangan, jangan sendirian, Rina siap menemani, ayo lanjutkan belajar!
            </Text>

            {/* Tombol Lanjut Belajar */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ color: '#fff', fontSize: 13, fontWeight: '500' }}>
                Lanjut Belajar
              </Text>
              <TouchableOpacity style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Play color="#B01E24" size={14} fill="#B01E24" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </SafeAreaView>
    </LinearGradient>
  )
}