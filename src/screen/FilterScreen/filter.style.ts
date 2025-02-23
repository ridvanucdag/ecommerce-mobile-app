import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      filterTitle: {
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
      },
      filterOption: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        marginBottom: 10,
      },
      filterItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      filterText: {
        fontSize: 16,
      },
      selectedFilter: {
        fontWeight: 'bold',
        color: 'blue',
      },
      sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: 10,
      },
      sliderLabel: {
        fontSize: 14,
        color: '#333',
      },
      slider: {
        width: '80%',
        height: 40,
        marginBottom: 10,
      },
      minCartAmount: {
        marginBottom: 10,
        marginHorizontal: 10,
      },
      ratingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
});
