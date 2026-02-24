import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Info } from 'lucide-react-native'
import React from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const TOP_THREE = [
    {
        rank: 1,
        name: 'Gloria Mairani',
        score: '1875 XP',
        medal: require('../../assets/images/LeaderboardFirst.svg'),
        colors: ['#FFD147', '#FF9F00'], // Gold
    },
    {
        rank: 2,
        name: 'Gloria Mairani',
        score: '1875 XP',
        medal: require('../../assets/images/LeaderboardSecond.svg'),
        colors: ['#EBEBEB', '#B8B8B8'], // Silver
    },
    {
        rank: 3,
        name: 'Gloria Mairani',
        score: '1875 XP',
        medal: require('../../assets/images/LeaderboardThird.svg'),
        colors: ['#FFB073', '#CF6A1F'], // Bronze
    },
]

const OTHERS = Array.from({ length: 7 }, (_, i) => ({
    rank: i + 4,
    name: 'Gloria Mairani',
    score: '1875 XP',
}))

export default function Leaderboard() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F9FE' }} edges={['top']}>
            {/* Header Section */}
            <LinearGradient
                colors={['#001B3D', '#032D60']}
                style={styles.header}
            >
                {/* Subtle White Streak Gradient */}
                <LinearGradient
                    colors={['#ffffff', 'rgba(255,255,255,0.05)', '#001B3D']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={StyleSheet.absoluteFill}
                />
                <View style={styles.headerTop}>
                    <View style={{ width: 24 }} />
                    <Text style={styles.headerTitle}>Leaderboard</Text>
                    <Info size={24} color="#fff" />
                </View>

                <View style={styles.trophyContainer}>
                    <View style={styles.trophyBox}>
                        <Image
                            source={require('../../assets/images/Trophy.svg')}
                            style={styles.trophyIcon}
                            contentFit="contain"
                        />
                    </View>
                </View>

                <View style={styles.headerInfo}>
                    <Text style={styles.monthText}>Desember</Text>
                    <Text style={styles.subtitleText}>Masuk 3 besar dan dapatkan hadiah!</Text>
                    <Text style={styles.timerText}>30:00:00</Text>
                </View>
            </LinearGradient>

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Top 3 Ranks */}
                {TOP_THREE.map((item) => (
                    <View key={item.rank} style={styles.rankCard}>
                        <LinearGradient
                            colors={[item.colors[0], item.colors[1], 'rgba(255,255,255,0)']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={[StyleSheet.absoluteFill, { borderRadius: 15, opacity: 0.3 }]}
                        />
                        <View style={styles.rankLeft}>
                            <Image source={item.medal} style={styles.medalIcon} contentFit="contain" />
                            <View style={styles.avatarPlaceholder} />
                            <Text style={styles.nameText}>{item.name}</Text>
                        </View>
                        <Text style={styles.scoreText}>{item.score}</Text>
                    </View>
                ))}

                {/* Other Ranks */}
                {OTHERS.map((item) => (
                    <View key={item.rank} style={styles.rankCard}>
                        <View style={styles.rankLeft}>
                            <Text style={styles.rankNumber}>{item.rank}</Text>
                            <View style={styles.avatarPlaceholder} />
                            <Text style={styles.nameText}>{item.name}</Text>
                        </View>
                        <Text style={styles.scoreText}>{item.score}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        paddingBottom: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
    },
    headerTop: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    trophyContainer: {
        marginBottom: 15,
    },
    trophyBox: {
        backgroundColor: '#EF980C',
        width: 110,
        height: 110,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },
    trophyIcon: {
        width: 120,
        height: 120,
    },
    headerInfo: {
        alignItems: 'center',
    },
    monthText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitleText: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.8,
        marginBottom: 10,
    },
    timerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        marginTop: -30, // Pull list up closer to rounded header
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    rankCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginBottom: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 3,
    },
    rankLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    medalIcon: {
        width: 35,
        height: 35,
        marginRight: 10,
    },
    rankNumber: {
        width: 35,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginRight: 10,
    },
    avatarPlaceholder: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#666',
        marginRight: 15,
    },
    nameText: {
        fontSize: 15,
        color: '#333',
        fontWeight: '500',
    },
    scoreText: {
        fontSize: 15,
        color: '#333',
        fontWeight: '500',
    },
})
