import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import LiveScreen from './screens/LiveScreen';
import NftScreen from './screens/NftScreen';
import SearchScreen from './screens/SearchScreen';
import MenuScreen from './screens/MenuScreen';
import Header from './components/Header';
import FixturesScreen from './screens/FixturesScreen';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconOct from 'react-native-vector-icons/FontAwesome';
import IconIo from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{tabBarStyle: styles.tabs, header: () => <Header />}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              const icon = focused ? 'white' : 'gray';
              return (
                <IconAnt type="antdesign" name="home" color={icon} size={26} />
              );
            },
            tabBarActiveTintColor: 'white',
          }}
        />
        <Tab.Screen
          name="Live"
          component={LiveScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <IconOct type="fontawesome" name="circle" color="red" size={26} />
            ),
            tabBarActiveTintColor: 'white',
          }}
        />
        <Tab.Screen
          name="NFT"
          component={NftScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              const icon = focused ? 'white' : 'gray';
              return (
                <IconAnt
                  type="antdesign"
                  name="codepen"
                  color={icon}
                  size={26}
                />
              );
            },
            tabBarActiveTintColor: 'white',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              const icon = focused ? 'white' : 'gray';
              return (
                <IconAnt
                  type="antdesign"
                  name="search1"
                  color={icon}
                  size={26}
                />
              );
            },
            tabBarActiveTintColor: 'white',
          }}
        />
        <Tab.Screen
          name="Menu"
          component={FixturesScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              const icon = focused ? 'white' : 'gray';
              return (
                <IconIo type="antdesign" name="menu" color={icon} size={26} />
              );
            },
            tabBarActiveTintColor: 'white',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: '#001038',
    paddingTop: 2
  },
});

export default App;
