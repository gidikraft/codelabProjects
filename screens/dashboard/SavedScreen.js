import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>SavedScreen</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF8137',
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenText: {
        color: 'black',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 'normal'
    }
})