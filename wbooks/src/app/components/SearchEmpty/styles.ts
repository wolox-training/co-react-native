import { StyleSheet } from 'react-native';
import { POLAR, TUNDORA } from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: POLAR,
    flex: 1,
    justifyContent: 'center'
  },
  searchIcon: {
    height: 65,
    marginBottom: 30,
    width: 65
  },
  title: {
    fontSize: 15,
    marginBottom: 12
  },
  subtitle: {
    color: TUNDORA,
    fontSize: 15
  }
});
