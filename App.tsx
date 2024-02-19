import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import CardData from './src/components/CardData';

import Ionicons from '@expo/vector-icons/Ionicons';
import Login from './src/screens/Login';
import Panel from './src/screens/Panel';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen name="Login" component={Login}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" size={size} color={color} />
            ),
            headerShown: false
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="CardData" component={CardData} options={{ headerShown: false }} />
        <Stack.Screen name="Panel" component={Panel} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

