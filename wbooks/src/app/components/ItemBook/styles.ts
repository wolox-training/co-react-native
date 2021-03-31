import { StyleSheet } from 'react-native';
import { WHITE, BLACK, TUNDORA } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 5,
    elevation: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 20,
    paddingHorizontal: 19,
    paddingVertical: 15,
    shadowColor: BLACK,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 1
  },
  image: {
    height: 60,
    width: 39
  },
  bookInfo: {
    flex: 1,
    marginLeft: 19
  },
  title: {
    color: TUNDORA,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
    lineHeight: 16,
    marginBottom: 3
  },
  author: {
    color: TUNDORA,
    fontSize: 15,
    letterSpacing: -0.3,
    lineHeight: 22
  }
});

export default styles;
