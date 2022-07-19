import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import {COLOR} from '../../../assets/theme/color';
import styles from './styles';

const Input = ({
  text,
  onChange,
  style,
  label,
  icon,
  iconPosition,
  error,
  ...innerProps
}: {
  text: string | undefined;
  onChange: ((text: string) => void) | undefined;
  style?: any;
  label?: string;
  icon?: any;
  iconPosition?: 'left' | 'right';
  error?: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      switch (iconPosition) {
        case 'left':
          return 'row';
        case 'right':
          return 'row-reverse';
      }
    }
  };
  const getBorderColor = () => {
    if (isFocused) {
      return COLOR.light.primary;
    }
    return error ? COLOR.light.danger : COLOR.light.grey;
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {flexDirection: getFlexDirection(), borderColor: getBorderColor()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.input, style]}
          onChangeText={onChange}
          value={text}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...innerProps}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
