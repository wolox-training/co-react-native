import { StyleSheet } from 'react-native';
import { POLAR, TUNDORA } from '@constants/colors';

const ICON_SIZE = 65;
const FONT_SIZE = 15;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: POLAR,
    flex: 1,
    justifyContent: 'center'
  },
  searchIcon: {
    height: ICON_SIZE,
    marginBottom: 30,
    width: ICON_SIZE
  },
  title: {
    fontSize: FONT_SIZE,
    marginBottom: 12
  },
  subtitle: {
    color: TUNDORA,
    fontSize: FONT_SIZE
  }
});
