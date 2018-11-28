import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OverviewScreen from '../screens/OverviewScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import UserScreen from '../screens/UserScreen';

fetchActions = () => {
  
  return fetch('http://localhost:8080/user/1/actions')
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      isLoading: false,
      actionSource: responseJson,
    });
  })
  .catch((error) =>{
    console.error(error);
  });
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-checkbox${focused ? '' : '-outline'}`
          : 'md-checkbox'
      }
    />
  ),
};

const OverviewStack = createStackNavigator({
  Overview: OverviewScreen,
});

OverviewStack.navigationOptions = {
  tabBarLabel: 'Overview',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-trending-up' : 'md-trending-up'}
      fetchActions={this.fetchActions}
    />
  ),
};

const AchievementsStack = createStackNavigator({
  Achievements: AchievementsScreen,
});

AchievementsStack.navigationOptions = {
  tabBarLabel: 'Achievments',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      fetchActions={this.fetchActions}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
    />
  ),
};

const UserStack = createStackNavigator({
  User: UserScreen,
});

UserStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      fetchActions={this.fetchActions}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  OverviewStack,
  AchievementsStack,
  UserStack,
});
