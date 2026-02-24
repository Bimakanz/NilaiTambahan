import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { ArrowLeft, PlayCircle } from 'lucide-react-native'
import React from 'react'
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LESSONS = [
    {
        id: 1,
        title: 'Dasar Keuangan Bisnis',
        description: 'Sukses butuh perjuangan, jangan sendirian. Rina siap menemani, ayo lanjutkan belajar!',
        colors: ['#800000', '#C41230'],
        image: require('../../assets/images/Home-Banner.svg'),
        buttonText: 'Lanjut Belajar',
    },
    {
        id: 2,
        title: 'Cashflow',
        description: 'Sukses butuh perjuangan, jangan sendirian. Dina siap menemani, ayo lanjutkan belajar!',
        colors: ['#FCA5A5', '#B91C1C'],
        image: require('../../assets/images/Cashflow.svg'),
        buttonText: 'Mulai Belajar',
    },
    {
        id: 3,
        title: 'Pajak Usaha',
        description: 'Sukses butuh perjuangan, jangan sendirian. Mina siap menemani, ayo lanjutkan belajar!',
        colors: ['#94A3B8', '#475569'],
        image: require('../../assets/images/PajakUsaha.svg'),
        buttonText: 'Mulai Belajar',
    },
    {
        id: 4,
        title: 'Investasi',
        description: 'Sukses butuh perjuangan, jangan sendirian. Nina siap menemani, ayo lanjutkan belajar!',
        colors: ['#78350F', '#451A03'],
        image: require('../../assets/images/Investasion.svg'),
        buttonText: 'Mulai Belajar',
    },
]

export default function Lesson() {
    const router = useRouter()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Header */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 15,
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <ArrowLeft size={24} color="#555" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '500', color: '#333' }}>Explore Lesson</Text>
                <View style={{ width: 24 }} /> {/* Spacer for centering title */}
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100, paddingTop: 10 }}
            >
                {LESSONS.map((lesson) => (
                    <TouchableOpacity
                        key={lesson.id}
                        activeOpacity={0.9}
                        style={{ marginBottom: 20 }}
                    >
                        <LinearGradient
                            colors={lesson.colors as any}
                            start={{ x: 1, y: 0.5 }}
                            end={{ x: 0, y: 0.5 }}
                            style={{
                                borderRadius: 25,
                                height: 180,
                                flexDirection: 'row',
                                overflow: 'hidden',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 6 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 8,
                            }}
                        >
                            {/* Character Image */}
                            <Image
                                source={lesson.image}
                                style={lesson.id === 1 ? {
                                    width: 250,
                                    height: 275,
                                    position: 'absolute',
                                    bottom: -70,
                                    left: -45
                                } : {
                                    width: 180,
                                    height: 180,
                                    position: 'absolute',
                                    bottom: -10,
                                    left: -10
                                }}
                                contentFit="contain"
                            />

                            {/* Content */}
                            <View style={{ flex: 1, paddingLeft: '42%', paddingRight: 15, justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700', marginBottom: 8 }}>
                                    {lesson.title}
                                </Text>
                                <Text style={{ color: lesson.id === 2 ? '#fff' : '#fca5a5', fontSize: 13, lineHeight: 16, opacity: 0.9 }}>
                                    {lesson.description}
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, alignSelf: 'flex-end' }}>
                                    <Text style={{ color: '#fff', fontSize: 12, marginRight: 8, fontWeight: '500' }}>
                                        {lesson.buttonText}
                                    </Text>
                                    <PlayCircle size={28} color="#fff" />
                                </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}
