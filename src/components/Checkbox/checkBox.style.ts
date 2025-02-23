import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    
      },
      checkbox: {
        width: 18,
        height: 18,
        borderWidth: 2,
        borderColor: '#3498db',
        borderRadius: 4,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      checked: {
        backgroundColor: '#3498db',
      },
      innerCheckbox: {
        width: 6,
        height: 6,
        backgroundColor: 'white',
      },
      label: {
        fontSize: 16,
      },
});
