import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: '#2F2D2C',
  },
  titleWithBack: {
    marginLeft: -10,
  },
  titleWithoutBack: {
    marginLeft: 35,
  },
  textCenter: {
    fontSize: 20,
  },
  container: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    rowGap: 8,
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  centerContainerRowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },

  inputContainer: {
    width: '94%',
    height: 35,
    marginLeft:7,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputFocused: {
     borderColor: 'green',
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    textAlignVertical: 'center',
    paddingVertical: 0,
    paddingLeft: -10,
  },
  leftIcon: {
    marginRight: 8,
  },
});
