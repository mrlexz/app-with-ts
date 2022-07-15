import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeName';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName={HOME_NAVIGATOR}>
      <Drawer.Screen
        options={{headerShown: false}}
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
