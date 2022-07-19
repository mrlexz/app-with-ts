import {StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/theme/color';

export default StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  buttonLabel: {
    color: COLOR.light.white,
    fontSize: 16,
  },
  loaderSection: {
    flexDirection: 'row',
  },
});
