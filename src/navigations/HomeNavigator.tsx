import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CONTACT_CREATE,
  CONTACT_DETAIL,
  CONTACT_LIST,
  SETTINGS,
} from '../constants/routeName';
import Contacts from '../screens/Contacts';
import Settings from '../screens/Settings';
import ContactDetail from '../screens/ContactDetail';
import ContactCreate from '../screens/ContactCreate';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={SETTINGS} component={Settings} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CONTACT_CREATE} component={ContactCreate} />
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
