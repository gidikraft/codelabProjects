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
    const [check, setCheck] = useState(false);
    const [securePassword, setSecurePassword] = useState(true);
    const [error, setError] = useState('')

    const signUpURL = 'https://kasppe.com.ng/farmsolhub/wp-json/niishcloud_api/v1/login/'
    // const signUpURL = 'https://clads-service.herokuapp.com/api/v1/customer/register'

    const onChange = ({ name, value }) => setForm({...form, [name]: value});

    const onSubmit = () => {
        handleSubmitButton()
    }

    const handleSubmitButton = () => {
        const emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\."+
        "[a-zA-Z0-9_+&*-]+)*@" +
        "(?:[a-zA-Z0-9-]+\\.)+[a-z" +
        "A-Z]{2,7}$";

        if (form.email.match(emailRegex)){
            signUp()
        } else {
            ToastAndroid.show("Please enter valid email!", ToastAndroid.SHORT);
        }

        if (form.password.trim() != ""){
            signUp()
        } else {
            ToastAndroid.show("Please enter valid password", ToastAndroid.SHORT);
        }
        
    }

    const bottomNavigation = () => navigation.navigate('BottomNavigation');

    const signUp = () => {
        fetch(signUpURL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                // 'Content-type': 'application/json;'
            },
            body: JSON.stringify({
                username: form.email,
                email: form.email,
                password: form.password,
                // email: form.email,
                // password: form.password,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            if (responseJson.status === 'success') {
                bottomNavigation()                // navigate to dashboard only if user is succesfully registered
                console.log(response.message)
            }
            
        })
        .catch((error) => {
            setError(error)
            console.log(error);
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
                    maxLength={10}
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
            {/* button set up to navigate without validation and sign up */}
            <Text style={styles.forgotPassword} onPress={bottomNavigation}>Forgot password</Text>
            <Text style={styles.continue}>- Or continue with -</Text>
            <View style={styles.loginChoice}>
                <View style={styles.facebookView}>
                    <Image source={require('../../assets/Facebook.png')} />
                    <Text 
                        onPress={() => {console.log('form :>>', form)}}
                        style={styles.loginChoiceText}
                    >Facebook
                    </Text>
                </View>
                <View style={styles.facebookView}>
                    <Image source={require('../../assets/Google.png')} />                    
                    <Text 
                        onPress={() => {console.log('form :>>', form)}}
                        style={styles.loginChoiceText}
                    >Google
                    </Text>
                </View>
                
            </View>
            <View style={styles.footerView}>
                <Text style={styles.signUpChoice}>Don’t have an account?</Text>
                <Text 
                    style={styles.signUp} 
                    onPress={() => {console.log('form :>>', form)}}
                >Sign up
                </Text>
            </View>
        </View>
    )

}
