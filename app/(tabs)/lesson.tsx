import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Lesson() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: '700', color: '#444' }}>Lesson</Text>
            <Text style={{ color: '#888', marginTop: 10 }}>Halaman ini sedang dalam pengembangan.</Text>
        </SafeAreaView>
    )
}
