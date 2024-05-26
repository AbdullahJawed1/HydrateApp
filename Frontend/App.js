// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import LogWaterScreen from './screens/LogWaterScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import { WaterIntakeProvider } from './screens/WaterIntakeContext';
import { AppRegistry } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <WaterIntakeProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Log Water') {
                iconName = 'water-outline';
              } else if (route.name === 'History') {
                iconName = 'list-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1E90FF',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Tab.Screen name="Log Water" component={LogWaterScreen} options={{ title: 'Log Water' }} />
          <Tab.Screen name="History" component={HistoryScreen} options={{ title: 'History' }} />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </WaterIntakeProvider>
  );
};

AppRegistry.registerComponent('main', () => App);

export default App;
