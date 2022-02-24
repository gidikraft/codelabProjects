import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

const { BACKGROUND_COLOR, THEME_COLOR, WHITE } = colors;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE
    },
    headerView: {
        flexDirection: 'row',
        backgroundColor: BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    searchView: {
        flexDirection: 'row'
    },
    searchIcon: {
        left: 60, 
        top: 51, 
        zIndex: 2,
    },
    input: {
        height: 32,
        width: 250,
        fontFamily: 'Rasa_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 16,
        marginTop: 48,
        marginBottom: 10,
        backgroundColor: WHITE,
        borderRadius: 8,
        textAlign: 'center',
    },
    userView: {
        backgroundColor: THEME_COLOR,
        height: 217,
    },
    profileView: {
        flexDirection: 'row',
        marginTop: 30,
        alignContent: 'center',
        alignItems: 'center',

    },
    logo: {
        marginTop: 48,
    },
    hbMenu: {
        marginTop: 38,
        marginLeft: 20,
    },
    profileImage: {
        marginLeft: 16
    },
    userProfileView: {
        marginLeft: 20,
    },
    username: {
        fontSize: 26,
        fontStyle: 'normal',
        fontWeight: '600',
        color: BACKGROUND_COLOR,
        letterSpacing: 0.3,
        fontFamily: 'Rasa_500Medium'

    },
    userPassword: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '400',
        color: BACKGROUND_COLOR,
        letterSpacing: 0.3,
        fontFamily: 'Rasa_400Regular',

    },
    dashboardView: {
        backgroundColor: WHITE,
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: -90,
    },
    notificationView: {
        flexDirection: 'row',
        marginHorizontal: 90,
        paddingVertical: 16,
    },
    dashboardMenu: {
        marginLeft: 30,
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '600',
        color: BACKGROUND_COLOR,
        letterSpacing: 0.3,
        fontFamily: 'Rasa_500Medium'

    }
})
