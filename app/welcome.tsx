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

const { width } = Dimensions.get('window')

export default function Welcome() {
    const router = useRouter()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30, paddingBottom: 40 }}>

                {/* ── Logo Section ── */}
                <View style={{ alignItems: 'center', marginBottom: 60 }}>
                    <LinearGradient
                        colors={['#C41230', '#4A0000']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 60,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 6 },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10,
                            marginBottom: 20,
                        }}
                    >
                        <Image
                            source={require('../assets/images/Saraya-Logo.svg')}
                            style={{ width: 85, height: 85 }}
                            contentFit="contain"
                        />
                    </LinearGradient>

                    <Image
                        source={require('../assets/images/Saraya.svg')}
                        style={{ width: 140, height: 35 }}
                        contentFit="contain"
                    />
                </View>

                {/* ── Text Section ── */}
                <View style={{ alignItems: 'center', marginBottom: 40 }}>
                    <Text style={{ fontSize: 26, color: '#000', textAlign: 'center', lineHeight: 34, letterSpacing: 0.5 }}>
                        Selamat datang di Saraya,{'\n'}Gloria
                    </Text>
                    <Text style={{ fontSize: 15, color: '#666', textAlign: 'center', marginTop: 16, lineHeight: 22, paddingHorizontal: 10 }}>
                        Mari kita mulai untuk mempersiapkan konten pilihan sesuai dengan kebutuhan kamu!
                    </Text>
                </View>

                {/* ── Button Section ── */}
                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => router.replace('/survey')}
                    style={{
                        backgroundColor: '#C41230',
                        borderRadius: 25,
                        paddingVertical: 14,
                        width: width * 0.75,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 6,
                        elevation: 6,
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                        Mulai Sekarang!
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}
