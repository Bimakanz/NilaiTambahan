import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import React from 'react'
import {
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')

export default function Survey() {
    const router = useRouter()

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

                <Text style={{ fontSize: 13, color: '#aaa', fontWeight: '500' }}>Survey 1</Text>

                <TouchableOpacity onPress={() => router.replace('/(tabs)/Home')} style={{ padding: 8 }}>
                    <Text style={{ fontSize: 14, color: '#C41230', fontWeight: '500' }}>Lewati</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: 'center', paddingTop: 10, paddingHorizontal: 28 }}>

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

                {/* ── Form Section ── */}
                <View style={{ width: '100%', alignItems: 'flex-start', marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, color: '#555', marginBottom: 25, textAlign: 'left' }}>
                        Nama bisnis kamu apa?
                    </Text>

                    <View style={{
                        width: '100%', height: 50, backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#eee',
                        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3
                    }}>
                        <TextInput
                            placeholder="Nama Bisnis"
                            placeholderTextColor="#ccc"
                            style={{ flex: 1, paddingHorizontal: 16, fontSize: 14, color: '#333' }}
                        />
                    </View>
                </View>

                {/* ── Footer Section (Button) ── */}
                <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%', paddingBottom: 60 }}>
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={() => router.push('/survey2')}
                        style={{
                            backgroundColor: '#C41230',
                            borderRadius: 18,
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
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>
                            Lanjut
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}
