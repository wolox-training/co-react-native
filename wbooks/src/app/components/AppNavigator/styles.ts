import { StyleSheet, Dimensions } from 'react-native';
import { POLAR } from '@constants/colors';

const winHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  headerImage: {
    backgroundColor: POLAR,
    flex: 1,
    width: '100%'
  },
  headerButtons: {
    marginHorizontal: 10
  },
  headerTitleStyle: {
    textTransform: 'uppercase'
  },
  headerStyle: {
    height: winHeight * 0.15
  },
  backButton: {
    flex: 1
  }
});
