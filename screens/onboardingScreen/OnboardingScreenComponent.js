import { View,  Image, Text, ImageBackground } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './OnBoardingScreenStyles'
import bgImage from '../../assets/onboardingBackground.png';

export default function OnboardingComponent() {
    const navigation = useNavigation();

    const navigateToWelcomeScreen = () => navigation.navigate('Welcome');

    return (
        <View style={styles.pageContent}>
            <ImageBackground source={bgImage} style={styles.container}>
                <Image source={require('../../assets/basket_icon.png')} style={styles.basketIcon} />
                <View >
                    <Text style={styles.text} >Start Shopping.</Text>
                    <Text style={styles.text} >Stay Happy.</Text>
                    <Text style={styles.text}>Anytime.</Text>
                </View>
                <Text style={styles.footer} >Basket Online Marketplace</Text>
                <View style={styles.navigationView} >
                    <Text style={styles.footerNavigation} onPress={navigateToWelcomeScreen} >Skip</Text>
                    <Text style={styles.footerNavigation} onPress={navigateToWelcomeScreen} >Next</Text>
                </View>
            </ImageBackground>
        </View>
  )
}