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

    // ── Input States ──
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // ── Validation Logic ──
    const isUsernameValid = (val: string) => {
        const numbers = val.match(/\d/g) || []
        return numbers.length >= 2
    }
    const isEmailValid = (val: string) => val.includes('@')
    const isPasswordValid = (val: string) => val.length >= 8

    const allValid = name.length > 0 && isUsernameValid(username) && isEmailValid(email) && isPasswordValid(password)

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
                        value={name}
                        onChangeText={setName}
                        style={{
                            width: '100%', height: 50, marginBottom: 14,
                            borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
                            paddingHorizontal: 16, fontSize: 14, color: '#222',
                            backgroundColor: '#fff',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                        }}
                    />

                    {/* ── Input Username ── */}
                    <View style={{ width: '100%', marginBottom: 14 }}>
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor="#aaa"
                            autoCapitalize="none"
                            value={username}
                            onChangeText={setUsername}
                            style={{
                                width: '100%', height: 50,
                                borderWidth: 1, borderColor: (username.length > 0 && !isUsernameValid(username)) ? '#ff4d4d' : '#ddd', borderRadius: 10,
                                paddingHorizontal: 16, fontSize: 14, color: '#222',
                                backgroundColor: '#fff',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                elevation: 3,
                            }}
                        />
                        {username.length > 0 && !isUsernameValid(username) && (
                            <Text style={{ color: '#ff4d4d', fontSize: 12, marginTop: 4, marginLeft: 4 }}>
                                * Username harus mengandung minimal 2 angka
                            </Text>
                        )}
                    </View>

                    {/* ── Input Email ── */}
                    <View style={{ width: '100%', marginBottom: 14 }}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#aaa"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            style={{
                                width: '100%', height: 50,
                                borderWidth: 1, borderColor: (email.length > 0 && !isEmailValid(email)) ? '#ff4d4d' : '#ddd', borderRadius: 10,
                                paddingHorizontal: 16, fontSize: 14, color: '#222',
                                backgroundColor: '#fff',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                elevation: 3,
                            }}
                        />
                        {email.length > 0 && !isEmailValid(email) && (
                            <Text style={{ color: '#ff4d4d', fontSize: 12, marginTop: 4, marginLeft: 4 }}>
                                * Email harus valid
                            </Text>
                        )}
                    </View>

                    {/* ── Input Password ── */}
                    <View style={{ width: '100%', marginBottom: 24 }}>
                        <View style={{
                            width: '100%', flexDirection: 'row', alignItems: 'center',
                            borderWidth: 1, borderColor: (password.length > 0 && !isPasswordValid(password)) ? '#ff4d4d' : '#ddd', borderRadius: 10,
                            paddingHorizontal: 16, height: 50,
                            backgroundColor: '#fff',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                        }}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                                style={{ flex: 1, fontSize: 14, color: '#222' }}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                {showPassword
                                    ? <Eye size={20} color="#aaa" />
                                    : <EyeOff size={20} color="#aaa" />}
                            </TouchableOpacity>
                        </View>
                        {password.length > 0 && !isPasswordValid(password) && (
                            <Text style={{ color: '#ff4d4d', fontSize: 12, marginTop: 4, marginLeft: 4 }}>
                                * Password harus minimal 8 karakter
                            </Text>
                        )}
                    </View>

                    {/* ── Tombol Daftar ── */}
                    <TouchableOpacity
                        activeOpacity={allValid ? 0.85 : 1}
                        onPress={() => {
                            if (allValid) {
                                router.replace('/welcome' as any)
                            }
                        }}
                        style={{
                            width: '100%', height: 50,
                            backgroundColor: allValid ? '#C41230' : '#e0e0e0',
                            borderRadius: 50, alignItems: 'center', justifyContent: 'center',
                            shadowColor: 'black', shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: allValid ? 0.35 : 0, shadowRadius: 8, elevation: allValid ? 5 : 0,
                            marginBottom: 20,
                        }}
                    >
                        <Text style={{ color: allValid ? '#fff' : '#aaa', fontSize: 16, fontWeight: '600' }}>
                            Daftar
                        </Text>
                    </TouchableOpacity>

                    {/* ── Atau ── */}
                    <Text style={{ color: '#aaa', fontSize: 13, marginBottom: 16 }}>atau</Text>

                    {/* ── Daftar dengan Google ── */}
                    <TouchableOpacity style={{
                        width: '100%', height: 50,
                        borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                        gap: 10, marginBottom: 28,
                        backgroundColor: '#fff',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 3,
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
                            <Text style={{ fontSize: 13, color: '#C41230' }}>Masuk</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
