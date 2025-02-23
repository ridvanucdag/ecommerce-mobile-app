import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  allText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'blue',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 5,
  },
  listContainer: {
    paddingVertical: 8,
    paddingRight: 15,
  },
  itemContainer: {
    width: 130,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  favourite: {
    height: 180,
    width: 155,
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 100,
  },
  name: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 5,
    height:35,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 2,
    left: 5,
  },
  rating: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 6,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 5,
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
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'green',
    marginTop:10,
    left: 5,
  },
  addToCartButton: {
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 5,
  },
  favouriteIcon: {
    position: 'absolute',
    right: 5,
    top: 1,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  iconHeart: {
    marginTop: 1,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityButton: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
