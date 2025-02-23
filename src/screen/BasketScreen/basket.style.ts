import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  basketContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  toggleContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 5,
  },
  discountedPrice1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    paddingRight: 4,
  },
  discountedPrice: {
    fontSize: 9,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    color: 'gray',
    paddingRight: 4,
  },
  discountPercentage: {
    fontSize: 9,
    fontWeight: 'bold',
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 6,
    marginHorizontal: 16,
    height: 77,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    width:'85%',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 2,
    right: 7,
  },
  rating: {
    fontSize: 10,
    color: 'black',
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 6,
  },
  itemDescription: {
    fontSize: 10,
    height: 23,
    marginBottom: 5,
    width:'90%',
  },
  sizePriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  sizeText: {
    fontSize: 14,
    color: '#808080',
    marginRight: 4,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  quantity: {
    marginHorizontal: 5,
    fontSize: 14,
  },
  quantityButton: {
    backgroundColor: '#fff',
    width: 16,
    height: 16,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2F2D2C',
  },
  buttonText: {
    color: '#2F2D2C',
    fontSize: 14,
    marginTop: -3,
  },
  underline: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e7e7e7',
  },
  underlineSmall: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginTop: 5,
    marginBottom: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 18,
    color: '#666',
  },
  empty: {
    fontSize: 18,
    color: '#666',
  },
  emptyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product: {
    paddingHorizontal: 16,
  },
  summaryContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  summaryText: {
    fontSize: 16,
    color: '#2F2D2C',
  },
  summaryAmount: {
    fontSize: 16,
    color: '#2F2D2C',
  },
  summaryTotalAmount: {
    fontSize: 16,
    color: '#2F2D2C',
    fontWeight: 'bold',
  },
  discountText: {
    textDecorationLine: 'line-through',
    color: 'green',
  },
  summaryRowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discountAmount: {
    textDecorationLine: 'line-through',
    color: 'green',
  },
  summaryTotal: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completeOrderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
