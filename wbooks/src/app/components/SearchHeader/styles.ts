import { StyleSheet } from 'react-native';
import { WHITE, RED, GRAY } from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 14,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 16
  },
  clearIcon: {
    height: 16,
    tintColor: GRAY,
    width: 16
  },
  clearIconActive: {
    tintColor: RED
  },
  input: {
    height: 35,
    paddingHorizontal: 10,
    flexBasis: '90%'
  },
  searchIcon: {
    height: 14,
    tintColor: GRAY,
    width: 14
  }
});
