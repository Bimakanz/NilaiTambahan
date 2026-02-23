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

export default function Survey5() {
    const router = useRouter()
    const [selected, setSelected] = useState('Basic: Baru memulai')

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

                <Text style={{ fontSize: 13, color: '#aaa', fontWeight: '500' }}>Survey 5</Text>

                <TouchableOpacity onPress={() => router.replace('/Congrats')} style={{ padding: 8 }}>
                    <Text style={{ fontSize: 14, color: '#C41230', fontWeight: '500' }}>Lewati</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingTop: 10, paddingHorizontal: 28 }}>

                {/* ── Logo Section ── */}
                <View style={{ marginBottom: 60 }}>
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
                <View style={{ width: '100%', alignItems: 'center', marginBottom: 40 }}>
                    <Text style={{ fontSize: 18, color: '#666', lineHeight: 26, textAlign: 'center' }}>
                        Kemampuan Finansial Anda saat ini (pilih yang paling sesuai):
                    </Text>
                </View>

                {/* ── Selection Options ── */}
                <View style={{ width: '100%', gap: 15, marginBottom: 40 }}>

                    {/* Basic */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setSelected('Basic : Baru memulai')}
                        style={{
                            width: '100%',
                            height: 55,
                            backgroundColor: selected === 'Basic : Baru memulai' ? '#C41230' : '#fff',
                            borderRadius: 15,
                            borderWidth: selected === 'Basic : Baru memulai' ? 0 : 1,
                            borderColor: '#eee',
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.1,
                            shadowRadius: 6,
                            elevation: 4,
                        }}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: selected === 'Basic : Baru memulai' ? '#fff' : '#666',
                            fontWeight: '500'
                        }}>
                            Basic : Baru memulai
                        </Text>
                    </TouchableOpacity>

                    {/* Menengah */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setSelected('Menengah : Paham dasar keuangan')}
                        style={{
                            width: '100%',
                            height: 55,
                            backgroundColor: selected === 'Menengah : Paham dasar keuangan' ? '#C41230' : '#fff',
                            borderRadius: 15,
                            borderWidth: selected === 'Menengah : Paham dasar keuangan' ? 0 : 1,
                            borderColor: '#eee',
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.1,
                            shadowRadius: 6,
                            elevation: 4,
                        }}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: selected === 'Menengah : Paham dasar keuangan' ? '#fff' : '#666',
                            fontWeight: '500'
                        }}>
                            Menengah : Paham dasar keuangan
                        </Text>
                    </TouchableOpacity>

                    {/* Mahir */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setSelected('Mahir : Paham perencanaan dan analisis')}
                        style={{
                            width: '100%',
                            height: 55,
                            backgroundColor: selected === 'Mahir : Paham perencanaan dan analisis' ? '#C41230' : '#fff',
                            borderRadius: 15,
                            borderWidth: selected === 'Mahir : Paham perencanaan dan analisis' ? 0 : 1,
                            borderColor: '#eee',
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.1,
                            shadowRadius: 6,
                            elevation: 4,
                        }}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: selected === 'Mahir : Paham perencanaan dan analisis' ? '#fff' : '#666',
                            fontWeight: '500'
                        }}>
                            Mahir : Paham perencanaan dan analisis
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* ── Footer Section (Button) ── */}
                <View style={{ width: '100%', paddingBottom: 60, marginTop: 'auto' }}>
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={() => router.push('/Congrats')}
                        style={{
                            backgroundColor: '#C41230',
                            borderRadius: 25,
                            height: 55,
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#C41230',
                            shadowOffset: { width: 0, height: 6 },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 8,
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
