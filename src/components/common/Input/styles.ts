import {StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/theme/color';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderColor: COLOR.light.grey,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 5,
    paddingHorizontal: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  input: {
    padding: 5,
    flex: 1,
    width: '100%',
  },
  error: {
    color: COLOR.light.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
