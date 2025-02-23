import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    imageBackground: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    title: {
      fontSize: 25,
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 20,
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'tomato',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    skipButton: {
      position: 'absolute',
      top: 40,
      right: 20,
      backgroundColor: 'transparent',
      padding: 10,
    },
    skipText: {
      color: '#fff',
      fontSize: 16,
    },
    indicatorContainer: {
      position: 'absolute',
      bottom: 20,
      flexDirection: 'row',
      alignSelf: 'center',
    },
    indicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      margin: 5,
    },
    activeIndicator: {
      backgroundColor: '#fff',
      width: 12,
      height: 12,
    },
    navigationButtons: {
      position: 'absolute',
      top: '53.5%',
      left: 10,
      right: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    arrowButtonLeft: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 15,
      borderRadius: 50,
      position: 'absolute',
      left: 10,
    },
    arrowButtonRight: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 15,
      borderRadius: 50,
      position: 'absolute',
      right: 10,
    },
    arrowText: {
      fontSize: 24,
      color: '#fff',
    },
  });
  