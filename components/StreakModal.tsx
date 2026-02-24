import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Zap } from 'lucide-react-native';
import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface StreakModalProps {
    visible: boolean;
    onClose: () => void;
    streakDays: number;
}

const WEEK_DAYS = ['S', 'S', 'R', 'K', 'J', 'S', 'M'];

export default function StreakModal({ visible, onClose, streakDays }: StreakModalProps) {
    const router = useRouter();

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <BlurView intensity={25} tint="dark" style={StyleSheet.absoluteFill}>
                <View style={styles.overlay}>
                    <View style={styles.modalContainer}>
                        {/* Header with Close Button */}
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Text style={styles.closeText}>X</Text>
                        </TouchableOpacity>

                        <View style={styles.content}>
                            {/* Title and Streak Number */}
                            <View style={styles.headerRow}>
                                <View>
                                    <Text style={styles.title}>Streak Belajar Kamu</Text>
                                    <View style={styles.streakRow}>
                                        <Text style={styles.streakNumber}>{streakDays}</Text>
                                        <Text style={styles.hariText}>Hari</Text>
                                    </View>
                                </View>
                                {/* Bolt Icon - Using Lucide Zap */}
                                <View style={styles.boltContainer}>
                                    <Zap size={80} color="#C41230" strokeWidth={2.5} fill="#C41230" />
                                </View>
                            </View>

                            {/* Weekly Progress Bar */}
                            <View style={styles.progressContainer}>
                                <View style={styles.daysRow}>
                                    {WEEK_DAYS.map((day, index) => (
                                        <Text key={index} style={styles.dayLabel}>{day}</Text>
                                    ))}
                                </View>
                                <View style={styles.circlesRow}>
                                    {WEEK_DAYS.map((_, index) => (
                                        <View
                                            key={index}
                                            style={[
                                                styles.circle,
                                                // Mock active state for the first day
                                                index === 0 ? styles.activeCircle : styles.inactiveCircle
                                            ]}
                                        />
                                    ))}
                                </View>
                            </View>

                            {/* Reward Section */}
                            <View style={styles.rewardSection}>
                                <Text style={styles.rewardTitle}>Reward untuk kamu!</Text>

                                <View style={styles.xpBadge}>
                                    <Image
                                        source={require('../assets/images/EXP.svg')}
                                        style={{ width: 30, height: 30 }}
                                        contentFit="contain"
                                    />
                                    <Text style={styles.xpText}>30</Text>
                                </View>

                                <Text style={styles.rewardSubtext}>Kumpulkan poin dan dapatkan hadiahnya</Text>
                            </View>

                            {/* Claim Button */}
                            <TouchableOpacity
                                style={styles.claimButton}
                                activeOpacity={0.8}
                                onPress={onClose}
                            >
                                <Text style={styles.claimButtonText}>Klaim Sekarang!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '95%',
        backgroundColor: '#F7E7E7', // Match the pale background in the image
        borderRadius: 40,
        padding: 25,
        alignItems: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 10,
    },
    closeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    content: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 10,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    streakRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    streakNumber: {
        fontSize: 50,
        fontWeight: '400',
        color: '#000',
        lineHeight: 64,
    },
    hariText: {
        fontSize: 30,
        color: '#000',
        marginLeft: 12,
        marginBottom: 8,
    },
    boltContainer: {
        // Red bolt icon container
    },
    progressContainer: {
        width: '100%',
        backgroundColor: '#B71C1C', // Deep red container
        borderRadius: 20,
        paddingVertical: 18,
        paddingHorizontal: 20,
        marginBottom: 25,
    },
    daysRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        paddingHorizontal: 5,
    },
    dayLabel: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
        width: 24,
        textAlign: 'center',
    },
    circlesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
    },
    circle: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    activeCircle: {
        backgroundColor: '#FF9999', // Light red for active
    },
    inactiveCircle: {
        backgroundColor: '#CCC', // Gray for inactive
    },
    rewardSection: {
        alignItems: 'center',
        marginBottom: 25,
    },
    rewardTitle: {
        fontSize: 18,
        color: '#666',
        fontWeight: '600',
        marginBottom: 12,
    },
    xpBadge: {
        backgroundColor: '#F1A12A', // Orange background for XP
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 12,
        gap: 15,
    },
    xpText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
    },
    rewardSubtext: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    claimButton: {
        width: '100%',
        backgroundColor: '#B71C1C',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    claimButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
    },
});
