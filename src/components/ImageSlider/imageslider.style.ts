import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {alignItems: 'center', justifyContent: 'center', marginBottom: 10},
    imageContainer: {width, height: 130},
    image: {width: '100%', height: '100%', resizeMode: 'cover'},
    pagination: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center',
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 4,
      backgroundColor: '#ccc',
      marginHorizontal: 5,
    },
    activeDot: {backgroundColor: 'red', width: 12},
  });