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
const cardWidth = (width - 56 - 16) / 2 // 56 padding total, 16 gap

// --- Survey Item (Manual Version) ---
// Kita buat fungsi kecil untuk membantu render tapi tetap dipasang satu-satu di JSX bawah ya!
const SurveyCard = ({ id, title, icon, isSelected, onToggle }: { id: string, title: string, icon: any, isSelected: boolean, onToggle: (id: string) => void }) => (
    <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => onToggle(id)}
        style={{
            width: cardWidth,
            height: 115, // Ukuran kartu lebih kecil (sebelumnya 140)
            borderRadius: 15,
            overflow: 'hidden',
            borderWidth: isSelected ? 3 : 0,
            borderColor: '#fbbf24', // Warna highlight sedikit berbeda (kuning emas) atau merah brand
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
        }}
    >
        <LinearGradient
            colors={['#C41230', '#2A0000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1, padding: 10, alignItems: 'center', justifyContent: 'center' }}
        >
            <Image
                source={icon}
                style={{ width: '100%', height: 45, marginBottom: 8 }} // Gambar lebih kecil (tinggi fixed 45)
                contentFit="contain"
            />
            <Text style={{ color: '#fff', fontSize: 11, textAlign: 'center', fontWeight: '600' }}>
                {title}
            </Text>
        </LinearGradient>
    </TouchableOpacity>
)

export default function Survey4() {
    const router = useRouter()
    const [selectedIds, setSelectedIds] = useState<string[]>([])

    const toggleSelection = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(item => item !== id))
        } else {
            if (selectedIds.length < 3) {
                setSelectedIds([...selectedIds, id])
            }
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* ── Header ── */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10, height: 50 }}>
                <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
                    <ChevronLeft size={24} color="#333" />
                </TouchableOpacity>
                <Text style={{ fontSize: 13, color: '#aaa', fontWeight: '500' }}>Survey 4</Text>
                <TouchableOpacity onPress={() => router.replace('/(tabs)/Home')} style={{ padding: 8 }}>
                    <Text style={{ fontSize: 14, color: '#C41230', fontWeight: '500' }}>Lewati</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 28, paddingTop: 10, paddingBottom: 110 }}>
                {/* ── Brand Logo ── */}
                <View style={{ alignItems: 'center', marginBottom: 25 }}>
                    <LinearGradient
                        colors={['#C41230', '#4A0000']}
                        style={{ width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Image source={require('../assets/images/Saraya-Logo.svg')} style={{ width: 45, height: 45 }} contentFit="contain" />
                    </LinearGradient>
                </View>

                {/* ── Questions ── */}
                <View style={{ marginBottom: 25 }}>
                    <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', lineHeight: 22, marginBottom: 10 }}>
                        Apa jenis topik edukasi yang paling Anda butuhkan?
                    </Text>
                    <Text style={{ fontSize: 13, color: '#999', textAlign: 'center' }}>Pilih 3</Text>
                </View>

                {/* ── Grid Cards (Manual "Satu-Satu") ── */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between' }}>

                    <SurveyCard
                        id="1" title="Kelola Keuangan" icon={require('../assets/images/Kelola_keuangan.svg')}
                        isSelected={selectedIds.includes("1")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="2" title="Akses Modal" icon={require('../assets/images/Akses_Modal.svg')}
                        isSelected={selectedIds.includes("2")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="3" title="Investasi" icon={require('../assets/images/Investasi.svg')}
                        isSelected={selectedIds.includes("3")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="4" title="Tabungan" icon={require('../assets/images/Tabungan.svg')}
                        isSelected={selectedIds.includes("4")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="5" title="Kelola Arus Kas" icon={require('../assets/images/KelolaArus_KAS.svg')}
                        isSelected={selectedIds.includes("5")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="6" title="Perencanaan Pajak" icon={require('../assets/images/Perencanaan_Pajak.svg')}
                        isSelected={selectedIds.includes("6")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="7" title="Asuransi Bisnis" icon={require('../assets/images/AsuransiBisnis.svg')}
                        isSelected={selectedIds.includes("7")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="8" title="Menyusun Anggaran" icon={require('../assets/images/MenyusunAnggaran_Bisnis.svg')}
                        isSelected={selectedIds.includes("8")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="9" title="Rencana Ekspansi" icon={require('../assets/images/Perencanaan_Expansi.svg')}
                        isSelected={selectedIds.includes("9")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="10" title="Pemasaran Konten" icon={require('../assets/images/Pemasaran_Konten.svg')}
                        isSelected={selectedIds.includes("10")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="11" title="Strategi KOL" icon={require('../assets/images/Strategi_KOL.svg')}
                        isSelected={selectedIds.includes("11")} onToggle={toggleSelection}
                    />
                    <SurveyCard
                        id="12" title="Pemasaran Digital" icon={require('../assets/images/Pemasaran_Digital.svg')}
                        isSelected={selectedIds.includes("12")} onToggle={toggleSelection}
                    />

                </View>
            </ScrollView>

            {/* ── Sticky Bottom Button ── */}
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', padding: 25, borderTopWidth: 1, borderTopColor: '#f5f5f5' }}>
                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => router.push('/survey5')}
                    style={{
                        backgroundColor: '#C41230',
                        borderRadius: 25,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 6,
                        elevation: 6,
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Lanjut</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
