import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../../../assets/theme/color';
import styles from './styles';

interface ButtonProps {
  title: string | undefined;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
}

const Button = ({
  title,
  disabled,
  loading,
  onPress,
  primary,
  secondary,
  danger,
}: ButtonProps) => {
  const getBgColor = () => {
    if (disabled) {
      return COLOR.light.grey;
    }
    if (primary) {
      return COLOR.light.primary;
    }
    if (secondary) {
      return COLOR.light.secondary;
    }
    if (danger) {
      return COLOR.light.danger;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? COLOR.light.secondary : COLOR.light.primary}
          />
        )}
        {title && (
          <Text style={[styles.buttonLabel, {paddingLeft: loading ? 10 : 0}]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
