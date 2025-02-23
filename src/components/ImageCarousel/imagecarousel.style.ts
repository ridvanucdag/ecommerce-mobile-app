import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 5,
    },
    imageContainer: {
      width: 220,
      height: 120,
      marginRight: 10,
    },
    influencerImageContainer: {
      width: 90,
      height: 140,
      marginRight: 10,
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    overlay: {
      position: 'absolute',
      top: 5,
      left: 3,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: 5,
      paddingVertical: 4,
    },
    thumbnail: {
      width: 18,
      height: 18,
      borderRadius: 10,
      marginRight: 5,
    },
    influencerText: {
      color: 'white',
      fontSize: 9,
      fontWeight: 'bold',
    },
  });