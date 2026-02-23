import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { Eye, EyeOff } from 'lucide-react-native'
import React, { useState } from 'react'
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Register() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingHorizontal: 28, paddingBottom: 40 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* ── Logo ── */}
                    <LinearGradient
                        colors={['#380303', '#C41230']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                            marginTop: 40,
                            width: 80, height: 80, borderRadius: 40,
                            alignItems: 'center', justifyContent: 'center',
                            shadowColor: '#000', shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.25, shadowRadius: 6, elevation: 5,
                        }}
                    >
                        <Image
                            source={require('../assets/images/Saraya-Logo.svg')}
                            style={{ width: 56, height: 56 }}
                            contentFit="contain"
                        />
                    </LinearGradient>

                    {/* ── Judul ── */}
                    <Text style={{ fontSize: 28, fontWeight: '600', color: '#222', marginTop: 20 }}>
                        Sign Up
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666', marginTop: 6, marginBottom: 5, alignSelf: 'flex-start' }}>
                        Daftar akun Anda
                    </Text>

                    {/* ── Input Nama ── */}
                    <TextInput
                        placeholder="Nama"
                        placeholderTextColor="#aaa"
                        autoCapitalize="words"
                        style={{
                            width: '100%', height: 50, marginBottom: 14,
                            borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
                            paddingHorizontal: 16, fontSize: 14, color: '#222',
                        }}
                    />

                    {/* ── Input Username ── */}
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="#aaa"
                        autoCapitalize="none"
                        style={{
                            width: '100%', height: 50, marginBottom: 14,
                            borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
                            paddingHorizontal: 16, fontSize: 14, color: '#222',
                        }}
                    />

                    {/* ── Input Email ── */}
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#aaa"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={{
                            width: '100%', height: 50, marginBottom: 14,
                            borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
                            paddingHorizontal: 16, fontSize: 14, color: '#222',
                        }}
                    />

                    {/* ── Input Password ── */}
                    <View style={{
                        width: '100%', flexDirection: 'row', alignItems: 'center',
                        borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
                        paddingHorizontal: 16, height: 50, marginBottom: 24,
                    }}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#aaa"
                            secureTextEntry={!showPassword}
                            style={{ flex: 1, fontSize: 14, color: '#222' }}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            {showPassword
                                ? <Eye size={20} color="#aaa" />
                                : <EyeOff size={20} color="#aaa" />}
                        </TouchableOpacity>
                    </View>

                    {/* ── Tombol Daftar ── */}
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={() => router.replace('/(tabs)/Home')}
                        style={{
                            width: '100%', height: 50, backgroundColor: '#C41230',
                            borderRadius: 50, alignItems: 'center', justifyContent: 'center',
                            shadowColor: '#C41230', shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.35, shadowRadius: 8, elevation: 5,
                            marginBottom: 20,
                        }}
                    >
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Daftar</Text>
                    </TouchableOpacity>

                    {/* ── Atau ── */}
                    <Text style={{ color: '#aaa', fontSize: 13, marginBottom: 16 }}>atau</Text>

                    {/* ── Daftar dengan Google ── */}
                    <TouchableOpacity style={{
                        width: '100%', height: 50,
                        borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                        gap: 10, marginBottom: 28,
                    }}>
                        <Image
                            source={require('../assets/images/Google.svg')}
                            style={{ width: 24, height: 24 }}
                            contentFit="contain"
                        />
                        <Text style={{ fontSize: 14, color: '#333' }}>Daftar dengan Google</Text>
                    </TouchableOpacity>

                    {/* ── Sudah punya akun? ── */}
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Text style={{ fontSize: 13, color: '#666' }}>Sudah punya akun?</Text>
                        <TouchableOpacity onPress={() => router.replace('/login')}>
                            <Text style={{ fontSize: 13, color: '#C41230', fontWeight: '700' }}>Masuk</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
