import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>AccountScreen</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D5C87',
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenText: {
        color: 'white',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 'normal'
    }
})