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

export default function Login() {
    const router = useRouter()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            {/* ── Red blob gradient di bagian atas ── */}
            <LinearGradient
                colors={['#000000ff', '#A31010', '#C41230']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '43%',
                    borderBottomLeftRadius: 150,
                    borderBottomRightRadius: 0,
                }}
            />

            {/* ── Konten utama ── */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 60 }}>

                {/* ── Logo bulat di tengah ── */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '30%' }}>
                    <LinearGradient
                        colors={['#C41230', '#4A0000']}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            width: 130,
                            height: 130,
                            borderRadius: 65,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.25,
                            shadowRadius: 8,
                            elevation: 8,
                        }}
                    >
                        <Image
                            source={require('../assets/images/Saraya-Logo.svg')}
                            style={{ width: 100, height: 100 }}
                            contentFit="contain"
                        />
                    </LinearGradient>

                    {/* ── Nama SARAYA ── */}
                    <Image
                        source={require('../assets/images/Saraya.svg')}
                        style={{
                            width: 160,
                            height: 45,
                            marginTop: 20,
                        }}
                        contentFit="contain"
                    />

                    {/* ── Tagline ── */}
                    <Text style={{
                        marginTop: 12,
                        fontSize: 18,
                        color: 'black',
                        textAlign: 'center',
                        lineHeight: 24,
                        paddingHorizontal: 40,
                    }}>
                        Master Finance, Earn Rewards,{'\n'}Grow Faster!
                    </Text>
                </View>

                {/* ── Tombol Mulai Sekarang ── */}
                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => router.replace('/login')}
                    style={{
                        backgroundColor: '#C41230',
                        borderRadius: 50,
                        paddingVertical: 16,
                        width: width * 0.7,
                        alignItems: 'center',
                        shadowColor: '#C41230',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.35,
                        shadowRadius: 10,
                        elevation: 20,
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 16, letterSpacing: 0.5 }}>
                        Mulai Sekarang!
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}