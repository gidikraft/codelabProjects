import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

const { THEME_COLOR, WHITE, BACKGROUND_COLOR } = colors;

export default StyleSheet.create({
    container: {
        flex: 1,
        opacity:0.5,
        backgroundColor: BACKGROUND_COLOR,
        
    },
    pageContent: {
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,

    },
    basketIcon: {
        marginTop: 240,
        alignSelf: 'center',
        marginBottom: 10,
        
    },
    text: {
        color: WHITE,
        marginBottom: 10,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 35,
        fontFamily: 'Rasa_400Regular'
    },
    footer: {
        color: THEME_COLOR,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily: 'Rasa_400Regular',
        marginTop: 140,
    },
    navigationView: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        marginHorizontal: 30,
    },
    footerNavigation: {
        color: THEME_COLOR,
        fontWeight: '700',
        fontSize: 25,
        fontStyle: 'normal',
        fontFamily: 'Rasa_400Regular'

    }
})

