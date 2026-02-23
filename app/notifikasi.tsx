import { useRouter } from 'expo-router'
import { Bell, ChevronLeft } from 'lucide-react-native'
import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Notifikasi() {
    const router = useRouter()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* ── Header ── */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                height: 60,
                borderBottomWidth: 1,
                borderBottomColor: '#f5f5f5'
            }}>
                <TouchableOpacity onPress={() => router.back()} style={{ padding: 10 }}>
                    <ChevronLeft size={24} color="#333" />
                </TouchableOpacity>
                <View style={{ flex: 1, marginRight: 44 }}> {/* Margin to center text */}
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#333', textAlign: 'center' }}>
                        Notifikasi
                    </Text>
                </View>
            </View>

            {/* ── Empty State Content ── */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 100 }}>
                <View style={{
                    width: 120,
                    height: 120,
                    backgroundColor: '#f8f8f8',
                    borderRadius: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 25
                }}>
                    <Bell size={60} color="#ccc" />
                </View>

                <Text style={{
                    fontSize: 16,
                    color: '#999',
                    fontWeight: '400',
                    textAlign: 'center'
                }}>
                    Belum ada notifikasi
                </Text>
            </View>
        </SafeAreaView>
    )
}
