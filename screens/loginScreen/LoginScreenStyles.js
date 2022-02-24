import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

const { BACKGROUND_COLOR, THEME_COLOR, MENU_TEXT_COLOR,  WHITE } = colors;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
    },
    headerImage: {
        alignSelf: 'center',
        marginTop: 46,
    },
    headerText: {
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: '700',
        textAlign: 'center',
        color: BACKGROUND_COLOR,
        marginTop: 40,
        fontFamily: 'Rasa_700Bold'
    },
    pageText: {
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '400',
        marginHorizontal: 65,
        textAlign: 'center',
        color: BACKGROUND_COLOR,
        marginTop: 20,
        fontFamily: 'Rasa_400Regular'
    },
    passwordContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginRight: 40,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: THEME_COLOR,
    },
    input: {
        fontFamily: 'Rasa_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 20,
    },
    visibilityIcon: {
        marginLeft: 210,
        // left: 200,
        alignSelf: 'baseline',
    },
    checkBox: {
        marginHorizontal: 20,
        fontFamily: 'Rasa_400Regular'
    },
    forgotPassword: {
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign: 'center',
        color: THEME_COLOR,
        marginTop: 20,
        textDecorationLine: "underline",
        fontFamily: 'Rasa_400Regular'
    },
    continue: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign: 'center',
        color: BACKGROUND_COLOR,
        marginTop: 20,
        fontFamily: 'Rasa_400Regular'
    },
    button: {
        backgroundColor: BACKGROUND_COLOR,
        alignSelf: 'center',
        height: 48,
        width: 289,
        borderRadius: 9,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '500',
        textAlign: 'center',
        color: WHITE,
        fontFamily: 'Rasa_500Medium'
    },
    loginChoice: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    facebookView: {
        flexDirection: 'row',
        width: 163,
        height: 48,
        borderWidth: 2,
        borderRadius: 8,
        marginTop: 20,
        borderColor: MENU_TEXT_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebook: {
        
    },
    loginChoiceText: {
        marginLeft: 10,
        fontFamily: 'Rasa_500Medium'
    },
    footerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 30,
    },
    signUpChoice: {
        color: MENU_TEXT_COLOR,
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: 'normal',
        textAlign: 'center',
        fontFamily: 'Rasa_400Regular'
    },
    signUp: {
        color: THEME_COLOR,
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'Rasa_500Medium'
    }
})

