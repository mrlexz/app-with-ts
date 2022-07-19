import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

const Container = ({
  style,
  children,
}: {
  children: React.ReactNode;
  style?: any;
}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
