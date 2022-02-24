import { View, 
    Text, 
    TouchableOpacity, 
    Image, 
    TextInput, 
    ToastAndroid 
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginScreenStyles';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



export default function LoginComponent() {
    const navigation = useNavigation();

    const [form, setForm] = useState({});
    const [data, setData] = useState({});
    const [check, setCheck] = useState(false);
    const [securePassword, setSecurePassword] = useState(true);
    const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

    const signUpURL = 'https://kasppe.com.ng/farmsolhub/wp-json/niishcloud_api/v1/login/'

    const onChange = ({ name, value }) => setForm({...form, [name]: value});

    const onSubmit = () => {
        console.log('form :>>', form)
        signUp()
    }

    const handleSubmitButton = () => {
        // const emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\."+
        // "[a-zA-Z0-9_+&*-]+)*@" +
        // "(?:[a-zA-Z0-9-]+\\.)+[a-z" +
        // "A-Z]{2,7}$";

        // if (form.email.match(emailRegex)){
        //     console.log(form.emailAddress);
        // } else {
        //     ToastAndroid.show("Please enter valid email!", ToastAndroid.SHORT);
        // }

        // if (form.password.trim() != ""){
        //     console.log(form.firstName)
        // } else {
        //     ToastAndroid.show("Please enter valid password", ToastAndroid.SHORT);
        // }
    //     if (!email) {
    //       alert('Please fill Email');
    //       return;
    //     }
    //     if (!username) {
    //       alert('Please fill username');
    //       return;
    //     }
    //     if (!userPassword) {
    //       alert('Please fill Password');
    //       return;
    //     }

    }

    const bottomNavigation = () => navigation.navigate('BottomNavigation');

    const signUp = () => {
        fetch(signUpURL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                username: form.email,
                email: form.email,
                password: form.password,
            })
        })
        .then((response) => response.json())
        // .then((json) => setData(json)) 
        .then((responseJson) => {
            console.log(responseJson)
            // if (responseJson.status === 'success') {
            //     setIsRegistraionSuccess(true)
            //     console.log(response.message)
            // }
            
        })
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/header_image.png')} style={styles.headerImage}/>
            <Text style={styles.headerText}>Log into your account </Text>
            <Text style={styles.pageText}>Enter your email and password to access your account or create an account.</Text>
            <View style={styles.passwordContainer}>
                <Feather name="mail" size={24} color='#FF8137' />
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => onChange({name: 'email', value})}
                    onSubmitEditing={() => onSubmit}
                    placeholder={"Email or Username"}
                    placeholderTextColor='#112D42'
                    underlineColorAndroid={'transparent'}
                    />
            </View>
            
            <View style={styles.passwordContainer}>
                <Feather name="key" size={24} color="#FF8137" />
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => onChange({name: 'password', value})}
                    onSubmitEditing={() => onSubmit}
                    placeholder={"Password"}
                    secureTextEntry={securePassword}
                    placeholderTextColor='#112D42'
                    underlineColorAndroid={'transparent'}
                    />
                <Ionicons 
                    style={styles.visibilityIcon} 
                    onPress={() => setSecurePassword((prev) => !prev)} 
                    name={securePassword? "ios-eye-sharp" : "ios-eye-off-sharp" } 
                    size={24} 
                    color="#797676"
                />
            </View>
        
            <CheckBox
                wrapperStyle={styles.checkBox}
                title="Remember me"
                checked={check}
                onPress={() => setCheck(!check)}
            />
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPassword} onPress={() => {console.log('clicked Forgot password')}}>Forgot password</Text>
            <Text style={styles.continue}>- Or continue with -</Text>
            <View style={styles.loginChoice}>
                <View style={styles.facebookView}>
                    <Image source={require('../../assets/Facebook.png')} />
                    <Text style={styles.loginChoiceText}>
                        Facebook
                    </Text>
                </View>
                <View style={styles.facebookView}>
                    <Image source={require('../../assets/Google.png')} />                    
                    <Text style={styles.loginChoiceText}>
                        Google
                    </Text>
                </View>
                
            </View>
            <View style={styles.footerView}>
                <Text style={styles.signUpChoice}>Don’t have an account?</Text>
                <Text style={styles.signUp} onPress={bottomNavigation}>Sign up</Text>
            </View>
        </View>
    )

}
