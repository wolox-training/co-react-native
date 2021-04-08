import { StyleSheet } from 'react-native';
import { WHITE, RED, GRAY } from '@constants/colors';

const ICON_SEARCH_SIZE = 14;
const ICON_CLEAR_SIZE = 16;

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
    height: ICON_CLEAR_SIZE,
    tintColor: GRAY,
    width: ICON_CLEAR_SIZE
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
    height: ICON_SEARCH_SIZE,
    tintColor: GRAY,
    width: ICON_SEARCH_SIZE
  }
});
