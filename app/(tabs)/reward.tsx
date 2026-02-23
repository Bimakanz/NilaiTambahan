import { Image } from 'expo-image'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Reward() {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/images/Rewards.svg')} style={{ width: 400, height: 745 }} contentFit="contain" />
        </SafeAreaView>
    )
}
