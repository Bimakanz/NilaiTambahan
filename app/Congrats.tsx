import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React from 'react'
import {
    Dimensions,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')

export default function Congrats() {
    const router = useRouter()

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* ── Background Red (Top Area) ── */}
            <LinearGradient
                colors={['#C41230', '#800000']}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: height * 0.4, // Sedikit lebih pendek agar split terlihat jelas
                }}
            />

            <SafeAreaView style={{ flex: 1 }}>

                {/* ── Empty Top Space (to let red show) ── */}
                <View style={{ height: height * 0.25 }} />

                {/* ── White Section (Rising Up) ── */}
                <View style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingHorizontal: 30,
                    paddingTop: 180, // Tambah padding agar teks tidak tertutup image yang overlap
                    alignItems: 'center'
                }}>

                    <Text style={{
                        fontSize: 32,
                        color: '#C41230',
                        marginBottom: 20,
                        textAlign: 'center'
                    }}>
                        Congratulations!
                    </Text>

                    <Text style={{
                        fontSize: 15,
                        color: '#333',
                        textAlign: 'center',
                        lineHeight: 22, 
                        fontWeight: '400',
                        marginBottom: 5
                    }}>
                        Terima kasih sudah mengisi survei.
                    </Text>

                    <Text style={{
                        fontSize: 15,
                        color: '#333',
                        textAlign: 'center',
                        lineHeight: 22,
                        fontWeight: '400'
                    }}>
                        Mulai belajar dan raih hadiah untuk berkembang lebih cepat!
                    </Text>

                    <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%', paddingBottom: 40 }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#999',
                            textAlign: 'center',
                            marginBottom: 15
                        }}>
                            Rekomendasi kelas untuk kamu sudah siap
                        </Text>

                        <TouchableOpacity
                            activeOpacity={0.85}
                            onPress={() => router.replace('/(tabs)/Home')}
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
                                Belajar Sekarang!
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ── Overlapping Illustration ── */}
                {/* Kita letakkan absolute agar ada di depan semua background */}
                <View style={{
                    position: 'absolute',
                    top: -30, // Disesuaikan agar di tengah perbatasan
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    zIndex: 10 // Pastikan ada di depan
                }}>
                    <Image
                        source={require('../assets/images/Congrats.svg')}
                        style={{ width: 300, height: 300 }} // Sedikit disesuaikan ukurannya agar pas
                        contentFit="contain"
                    />
                </View>

            </SafeAreaView>
        </View>
    )
}
