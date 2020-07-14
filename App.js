import { StatusBar } from 'expo-status-bar';
import React, { Component}  from 'react';
import 'react-native-gesture-handler';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import Home from './src/Tabs/home';
import Card from './src/Tabs/card';
import Activity from './src/Tabs/activity';
import Locator from './src/Tabs/locator';
import Setting from './src/Tabs/settings';
import CardDetails from './src/Screen/cardDetails'
import IconFeather from 'react-native-vector-icons/Feather';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

const stack = createStackNavigator();
const bottomTabs = createBottomTabNavigator();

export default class App extends Component{

  createBottomTabNavigator = () => {
    return(

      <bottomTabs.Navigator>
        <bottomTabs.Screen name="Card" size={30} component={Card} 
            options={{
              tabBarLabel:'Card',
              tabBarIcon: () => (
                <IconFeather size={25} name="credit-card"/>
              )
            }}
        />
        
        <bottomTabs.Screen name="Home" size={30} component={Home} 
          options={{
            tabBarLabel:'Home',
            tabBarIcon: () => (
              <IconFeather size={25} name="home"/>
            )
          }}
        />
        
        <bottomTabs.Screen name="Locator" size={30} component={Locator} 
          options={{
            tabBarLabel:'Locator',
            tabBarIcon: () => (
              <IconEvilIcons size={25} name="location"/>
            )
          }}
        />

        <bottomTabs.Screen name="Activity" size={30} component={Activity} 
          options={{
            tabBarLabel:'Activity',
            tabBarIcon: () => (
              <IconFeather size={25} name="activity"/>
            )
          }}
        />
        
        <bottomTabs.Screen name="Settings" size={30} component={Setting} 
          options={{
            tabBarLabel:'Settings',
            tabBarIcon: () => (
              <IconFeather size={25} name="settings"/>
            )
          }}
        />
      </bottomTabs.Navigator>
    );
  }
  render(){
    return(
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="bottmTabs" options={{headerShown:false}}
            children={this.createBottomTabNavigator}/>
          <stack.Screen name="CardDetail" options={{headerShown:false}} component={CardDetails}/>
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}

