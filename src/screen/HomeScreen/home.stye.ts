import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white',
    paddingBottom:15,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 24,
    alignItems: 'center',
  },
  searchButton: {
    flex: 1,
  },
  searchInput: {
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingLeft: 15,
    paddingTop:10,
    fontSize: 16,
    color: '#333',
    borderColor:'gray',
    borderWidth:1,
  },
  bottom:{
    paddingBottom:16
  },
});
