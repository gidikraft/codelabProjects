import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './WelcomeScreenStyles';

export default function WelcomeComponent() {
    const navigation = useNavigation();

    const navigateToLoginScreen = () => navigation.navigate('Login');

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/header_image.png')} style={styles.headerImage}/>
            <View style={styles.welcomeTextView}>
                <Text style={styles.welcomeText}>Welcome to</Text>
                <Text style={styles.basketText}>basket online store</Text>
                <Text style={styles.basketLineText}>basket is the no1 online store for both new and used products.</Text>
            </View>
            <Image source={require('../../assets//family_with_Kids.png')} style={styles.welcomeImage}/>
            <TouchableOpacity style={styles.button} onPress={navigateToLoginScreen}>
                <Text style={styles.buttonText}>GET STARTED</Text>
                <Image source={require('../../assets/navigation_arrow.png')} />
            </TouchableOpacity>
        </View>
    )
}

