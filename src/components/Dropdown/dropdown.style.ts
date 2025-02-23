import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    dropdownButton: {
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    selectedTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    selectedText: {
      color: 'black',
      fontWeight: 'bold',
    },
    dropdownMenu: {
      position: 'absolute',
      top: 30,
      marginLeft: -12,
      backgroundColor: '#fff',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      zIndex: 999,
      width: 'auto',
    },
    dropdownItem: {
      paddingVertical: 5,
      paddingHorizontal: 5,
      width: 'auto',
    },
    dropdownItemContent: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 'auto',
    },
  });