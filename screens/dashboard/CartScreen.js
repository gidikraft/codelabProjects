import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>CartScreen</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#112D42',
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