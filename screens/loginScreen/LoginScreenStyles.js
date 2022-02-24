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
        marginTop: 60,
    },
    pageText: {
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '400',
        marginHorizontal: 60,
        textAlign: 'center',
        color: BACKGROUND_COLOR,
        marginTop: 20,
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
        // fontFamily: 'roboto',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 20,
    },
    visibilityIcon: {
        marginLeft: 200,
        alignSelf: 'baseline',
    },
    checkBox: {
        marginHorizontal: 20,
    },
    forgotPassword: {
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign: 'center',
        color: THEME_COLOR,
        marginTop: 20,
        textDecorationLine: "underline",
    },
    continue: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign: 'center',
        color: BACKGROUND_COLOR,
        marginTop: 20,
    },
    button: {
        backgroundColor: BACKGROUND_COLOR,
        alignSelf: 'center',
        height: 48,
        width: 289,
        borderRadius: 9,
        marginTop: 50,
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
        marginTop: 30,
        borderColor: MENU_TEXT_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebook: {

    },
    loginChoiceText: {
        marginLeft: 10,
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
    },
    signUp: {
        color: THEME_COLOR,
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '600',
        textAlign: 'center',
    }
})

