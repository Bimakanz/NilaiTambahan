import { Image } from 'expo-image'
import { ChevronRight, Library, Target, Zap } from 'lucide-react-native'
import React from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header Section */}
                <View style={styles.header}>
                    <View style={styles.profileRow}>
                        <Image
                            source={require('../../assets/images/aripin.jpg')}
                            style={styles.profilePic}
                        />
                        <View style={styles.profileInfo}>
                            <Text style={styles.userName}>Ujang Supriadi</Text>
                            <Text style={styles.businessName}>Pulau Luarbiasa</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.ubahText}>Ubah</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.content}>
                    {/* Statistik Section */}
                    <Text style={styles.sectionTitle}>Statistik</Text>
                    <View style={styles.statsGrid}>
                        <StatItem icon={<Library size={24} color="#fff" />} label="Lesson" value="10" />
                        <StatItem icon={<Zap size={24} color="#fff" />} label="Streak" value="20" />
                        <StatItem icon={<Image source={require('../../assets/images/EXP.svg')} style={{ width: 30, height: 30 }} contentFit="contain" />} label="XP" value="120" />
                        <StatItem icon={<Target size={24} color="#fff" />} label="Akurasi" value="70%" />
                    </View>

                    {/* Akun Section */}
                    <Text style={styles.sectionTitle}>Akun</Text>
                    <MenuItem label="Detail Bisnis" />
                    <MenuItem label="Ubah Kata Sandi" />

                    {/* Tentang Section */}
                    <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Tentang</Text>
                    <MenuItem label="Keuntungan Belajar di Saraya" />
                    <MenuItem label="Syarat dan Kentetuan" />
                    <MenuItem label="Kebijakan Privasi" />

                    {/* Exit Button */}
                    <TouchableOpacity style={styles.exitButton}>
                        <Text style={styles.exitText}>Keluar</Text>
                    </TouchableOpacity>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Version 1.1</Text>
                        <Text style={styles.footerText}>#TogetherWeShapeTheFuture</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

function StatItem({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <View style={styles.statItem}>
            <View style={styles.statIconContainer}>
                {icon}
            </View>
            <View>
                <Text style={styles.statValue}>{value}</Text>
                <Text style={styles.statLabel}>{label}</Text>
            </View>
        </View>
    )
}

function MenuItem({ label }: { label: string }) {
    return (
        <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuLabel}>{label}</Text>
            <ChevronRight size={20} color="#000" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#001B3D',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 25,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePic: {
        width: 70,
        height: 70,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#E7B53B',
    },
    profileInfo: {
        flex: 1,
        marginLeft: 15,
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    },
    businessName: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
        marginTop: 2,
    },
    ubahText: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.9,
    },
    content: {
        paddingHorizontal: 40,
        paddingTop: 25,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#C41230',
        marginBottom: 15,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '45%',
        marginBottom: 20,
    },
    statIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#C41230',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    statValue: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
    },
    statLabel: {
        fontSize: 12,
        color: '#888',
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    menuLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
    },
    exitButton: {
        backgroundColor: '#7395D1',
        borderRadius: 20,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 100,
    },
    exitText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30,
    },
    footerText: {
        fontSize: 10,
        color: '#888',
    },
})
