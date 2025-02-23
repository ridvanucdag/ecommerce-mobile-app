import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {

    paddingHorizontal: 5,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  categoryContainer: {
    alignItems: 'center',
    marginHorizontal: 4,
    padding: 1,
    borderRadius: 10,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedImageContainer: {
    backgroundColor: 'red',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 15,
  },
  title: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
});
