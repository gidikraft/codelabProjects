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

    },
    basketText: {
        fontSize: 45,
        fontStyle: 'normal',
        fontWeight: '700',
        textAlign: 'center',
        color: WHITE,

    },
    basketLineText: {
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '400',
        marginHorizontal: 26,
        textAlign: 'center',
        color: WHITE,

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

    },
    buttonArrow: {
        marginLeft: 50,
        
    }

})

