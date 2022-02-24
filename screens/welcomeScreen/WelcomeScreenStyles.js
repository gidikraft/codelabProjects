import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

const { BACKGROUND_COLOR, THEME_COLOR, WHITE } = colors;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,

    },
    headerImage: {
        alignSelf: 'center',
        marginTop: 46,

    },
    welcomeTextView: {
        marginTop: 30,

    },
    welcomeText: {
        fontSize: 28,
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign: 'center',
        color: WHITE,
        fontFamily: 'Rasa_400Regular'
    },
    basketText: {
        fontSize: 45,
        fontStyle: 'normal',
        fontWeight: '700',
        textAlign: 'center',
        color: WHITE,
        fontFamily: 'Rasa_700Bold'
    },
    basketLineText: {
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '400',
        marginHorizontal: 40,
        textAlign: 'center',
        color: WHITE,
        fontFamily: 'Rasa_400Regular'
    },
    welcomeImage: {
        alignSelf: 'center',
        marginTop: 50,

    },
    button: {
        backgroundColor: THEME_COLOR,
        alignSelf: 'center',
        height: 48,
        width: 289,
        borderRadius: 9,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    buttonText: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 22,
        color: WHITE,
        fontFamily: 'Rasa_500Medium'
    },
    buttonArrow: {
        marginLeft: 50,
        
    }

})

