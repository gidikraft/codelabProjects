import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import SavedScreen from '../screens/dashboard/SavedScreen';
import CartScreen from '../screens/dashboard/CartScreen';
import AccountScreen from '../screens/dashboard/AccountScreen';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        showLabel: true,
        activeTintColor: '#FF8137',
        inactiveTintColor: '#112D42',
        labelStyle: {
            fontSize: 14,
            textTransform: "uppercase",
            paddingTop: 10,
        },
    }} >
        <Tab.Screen 
        name="Home" 
        component={DashboardScreen} 
        options={{ tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="home" size={24} color="#112D42" />
        )
        }} />

        <Tab.Screen 
        name="Saved" 
        component={SavedScreen}
        options={
            {tabBarIcon: ({color, size}) => (
                <Ionicons name="ios-star-outline" size={24} color="#112D42"  />
            )}
        } />

        <Tab.Screen 
        name="Account" 
        component={AccountScreen}
        options={
            {tabBarIcon: ({color, size}) => (
                <Ionicons name="person-outline" size={24} color="#112D42" />
            )}
        }  />

        <Tab.Screen 
        name="Cart" 
        component={CartScreen}
        options={
            {tabBarIcon: ({color, size}) => (
                <AntDesign name="shoppingcart" size={24} color="#112D42" />
            )}
        } />
    </Tab.Navigator>
  )
}
