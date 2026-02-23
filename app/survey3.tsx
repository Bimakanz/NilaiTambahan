import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import React, { useState } from 'react'
import {
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')
const categories = [
    'Manajemen Keuangan',
    'Pemasaran',
    'Operasional',
    'Modal Usaha',
    'Lainnya'
]

export default function Survey3() {
    const router = useRouter()
    const [selected, setSelected] = useState('Manajemen Keuangan')

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* ── Header Actions ── */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 10,
                height: 50
            }}>
                <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
                    <ChevronLeft size={24} color="#333" />
                </TouchableOpacity>

                <Text style={{ fontSize: 13, color: '#aaa', fontWeight: '500' }}>Survey 3</Text>

                <TouchableOpacity onPress={() => router.replace('/(tabs)/Home')} style={{ padding: 8 }}>
                    <Text style={{ fontSize: 14, color: '#C41230', fontWeight: '500' }}>Lewati</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingTop: 10, paddingHorizontal: 28 }}>

                {/* ── Logo Section ── */}
                <View style={{ marginBottom: 40 }}>
                    <LinearGradient
                        colors={['#C41230', '#4A0000']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.2,
                            shadowRadius: 8,
                            elevation: 8,
                        }}
                    >
                        <Image
                            source={require('../assets/images/Saraya-Logo.svg')}
                            style={{ width: 70, height: 70 }}
                            contentFit="contain"
                        />
                    </LinearGradient>
                </View>

                {/* ── Question ── */}
                <View style={{ width: '100%', alignItems: 'center', marginBottom: 30 }}>
                    <Text style={{ fontSize: 18, color: '#666', lineHeight: 26, textAlign: 'center' }}>
                        Apa tantangan terbesar yang Anda hadapi saat ini dalam membangun bisnis?
                    </Text>
                </View>

                {/* ── Category List Section ── */}
                <View style={{ width: '100%', gap: 12, marginBottom: 40 }}>
                    {categories.map((item) => {
                        const isSelected = selected === item
                        return (
                            <TouchableOpacity
                                key={item}
                                activeOpacity={0.7}
                                onPress={() => setSelected(item)}
                                style={{
                                    width: '100%',
                                    height: 50,
                                    backgroundColor: isSelected ? '#C41230' : '#fff',
                                    borderRadius: 12,
                                    borderWidth: isSelected ? 0 : 1.5,
                                    borderColor: '#eee',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 4,
                                    elevation: 3,
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    color: isSelected ? '#fff' : '#888',
                                    fontWeight: isSelected ? '500' : '400'
                                }}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                {/* ── Footer Section (Button) ── */}
                <View style={{ width: '100%', paddingBottom: 60 }}>
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={() => router.push('/survey4')}
                        style={{
                            backgroundColor: '#C41230',
                            borderRadius: 20,
                            paddingVertical: 14,
                            width: '100%',
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.2,
                            shadowRadius: 6,
                            elevation: 6,
                        }}
                    >
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                            Lanjut
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
