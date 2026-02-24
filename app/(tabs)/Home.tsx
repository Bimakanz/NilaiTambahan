import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Bell, PlayCircle, Zap } from 'lucide-react-native'
import React, { useEffect, useState } from 'react'
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import StreakModal from '../../components/StreakModal'

const { width } = Dimensions.get('window')

export default function Home() {
  const router = useRouter()
  const params = useLocalSearchParams()
  const [showStreakModal, setShowStreakModal] = useState(false)

  useEffect(() => {
    if (params.showStreak === 'true') {
      setShowStreakModal(true)
    }
  }, [params.showStreak])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

        {/* ── Header ── */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 25,
          paddingVertical: 20
        }}>
          <View>
            <Text style={{ fontSize: 24, fontWeight: '700', color: '#444' }}>Selamat datang,</Text>
            <Text style={{ fontSize: 20, color: '#888', marginTop: 2 }}>Ujang</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 1 }}>
            <TouchableOpacity onPress={() => setShowStreakModal(true)} style={{ padding: 5 }}>
              <Zap size={24} color="#555" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push('/notifikasi')}
              style={{ padding: 5 }}
            >
              <Bell size={24} color="#555" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Featured Card (Dasar Keuangan Bisnis) ── */}
        <View style={{ paddingHorizontal: 20 }}>
          <TouchableOpacity activeOpacity={0.9}>
            <LinearGradient
              colors={['#800000', '#C41230']}
              start={{ x: 1, y: 0.5 }}
              end={{ x: 0, y: 0.5 }}
              style={{
                borderRadius: 25,
                height: 180,
                flexDirection: 'row',
                overflow: 'hidden',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.3,
                shadowRadius: 15,
                elevation: 12,
              }}
            >
              {/* 3D Character */}
              <Image
                source={require('../../assets/images/Home-Banner.svg')}
                style={{ width: 300, height: 300, position: 'absolute', bottom: -75, left: -80 }}
                contentFit="contain"
              />

              {/* Text Content */}
              <View style={{ flex: 1, paddingLeft: '40%', paddingVertical: 20, paddingRight: 15, justifyContent: 'center', right: 25 }}>
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700', marginBottom: 8 }}>
                  Dasar Keuangan Bisnis
                </Text>
                <Text style={{ color: '#fca5a5', fontSize: 13, lineHeight: 15 }}>
                  Sukses butuh perjuangan, jangan sendirian. Rina siap menemani, ayo lanjutkan belajar!
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, alignSelf: 'flex-end', left: 10 }}>
                  <Text style={{ color: '#fff', fontSize: 12, marginRight: 8, fontWeight: '500' }}>Lanjut Belajar</Text>
                  <PlayCircle size={30} color="#fff" />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* ── Stats Section (Total Poin & Koin) ── */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 25, gap: 10, bottom: 30 }}>
          {/* Total Poin Card */}
          <Image source={require('../../assets/images/TotalPoin.svg')} style={{ width: 160, height: 160, marginRight: 10 }} contentFit="contain" />

          <Image source={require('../../assets/images/Koin.svg')} style={{ width: 160, height: 160, marginRight: 10 }} contentFit="contain" />
        </View>

        {/* ── Layanan Bisnis Section ── */}
        <View style={{ paddingHorizontal: 25, marginTop: -60 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#444' }}>Layanan Bisnis</Text>
          <View style={{ flexDirection: 'row', gap: 15 }}>

            {/* Chat Elve Item */}
            <TouchableOpacity>
              <Image source={require('../../assets/images/ChatElve.svg')} style={{ width: 165, height: 165, marginBottom: 12 }} contentFit="contain" />
            </TouchableOpacity>

            {/* Track Keuangan Item */}
            <TouchableOpacity>
              <Image source={require('../../assets/images/TrackKeuangan.svg')} style={{ width: 165, height: 165, marginBottom: 12 }} contentFit="contain" />
            </TouchableOpacity>

          </View>
        </View>

        {/* ── Special Untuk Kamu Section ── */}
        <View style={{ paddingHorizontal: 25, marginTop: -20 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#444', marginBottom: 15 }}>Special Untuk Kamu</Text>
          <TouchableOpacity activeOpacity={0.9}>
            <View style={{
              borderRadius: 20,
              overflow: 'hidden',
              height: 160,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.1,
              shadowRadius: 12,
              elevation: 5
            }}>
              <Image
                source={require('../../assets/images/Banner.svg')}
                style={{ width: '100%', height: '100%' }}
                contentFit="cover"
              />
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <StreakModal
        visible={showStreakModal}
        onClose={() => setShowStreakModal(false)}
        streakDays={20}
      />
    </SafeAreaView>
  )
}