import { View, Text, Image, TextInput } from 'react-native'
import React, { useState }  from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './DashboardStyles';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardComponent() {
    const navigation = useNavigation();
    const [input, setInput] = useState("");
    
    return (
        <View style={styles.container}>
            <View style={styles.headerView} >
                <Image source={require('../../assets/basketLogo.png')} style={styles.logo}/>
                <View style={styles.searchView}>
                    <Ionicons style={styles.searchIcon} name="search" size={24} color="#112D42" />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setInput(text)}
                        onSubmitEditing={() => {setInput("")}}
                        value={input}
                        placeholder="Search in basket"
                        placeholderTextColor='#112D42'
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                
                <Image source={require('../../assets/hbMenu.png')} style={styles.hbMenu}/>
            </View>
            <View style={styles.userView}>
                <View style={styles.profileView}>
                    <Image source={require('../../assets/profileImage.png')} style={styles.profileImage}/>
                    <View style={styles.userProfileView}>
                        <Text style={styles.username} >Daniel Obi</Text>
                        <Text style={styles.userEmail}>danielobi@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={styles.dashboardView}>
                <View style={styles.notificationView}>
                    <Image source={require('../../assets/bell.png')} />
                    <Text style={styles.notification}>Notification</Text>
                </View>
                <View style={styles.notificationView}>
                    <Image source={require('../../assets/registration.png')} />
                    <Text style={styles.notification}>Edit Profile</Text>
                </View>
                <View style={styles.notificationView}>
                    <Image source={require('../../assets/wishlist.png')} />
                    <Text style={styles.notification}>Wishlist</Text>
                </View>
                <View style={styles.notificationView}>
                    <Image source={require('../../assets/activityHistory.png')} />
                    <Text style={styles.notification}>Order History</Text>
                </View>
                <View style={styles.notificationView}>
                    <Image source={require('../../assets/tracking.png')} />
                    <Text style={styles.notification}>Track Order</Text>
                </View>
                <View style={styles.notificationView}>
                    <Image source={require('../../assets/cardPayment.png')} />
                    <Text style={styles.notification}>Payment option</Text>
                </View>
                <View style={styles.notificationView}>
                    <Image source={require('../../assets/settings.png')} />
                    <Text style={styles.notification}>Settings</Text>
                </View>
                <View style={styles.notificationView}>
                    <Image source={require('../../assets/logout.png')} />
                    <Text style={styles.notification} onPress={() => navigation.navigate('Onboarding')}>Log out</Text>
                </View>
            </View>
        </View>
    )
}