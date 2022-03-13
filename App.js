import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './screens/onboardingScreen/OnboardingScreen';
import WelcomeScreen from './screens/welcomeScreen/WelcomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import BottomNavigation from './navigation/BottomNavigation';
import { useFonts, Rasa_300Light, Rasa_400Regular , Rasa_700Bold, Rasa_500Medium} from '@expo-google-fonts/rasa';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Rasa_300Light,
    Rasa_400Regular,
    Rasa_700Bold,
    Rasa_500Medium
  });
    
  if (!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown: false}} />
        
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

