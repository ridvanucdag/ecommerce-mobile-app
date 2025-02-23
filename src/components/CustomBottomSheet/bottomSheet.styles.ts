import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  overlay: {
    backgroundColor: 'black', // Arka planı siyah yapmak
    opacity: 1, // Şeffaflık da ekledik
    borderRadius: 10,
    position: 'absolute', // Yalnızca arka planda gösterilsin
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
});
