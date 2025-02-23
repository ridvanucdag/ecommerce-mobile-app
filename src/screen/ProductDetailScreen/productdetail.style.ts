import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 350,
  },
  backButton: {
    position: 'absolute',
    top: 45,
    left: 10,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  favoriteButton: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 50,
    top: 45,
    right: 10,
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  underline: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginTop: 6,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '80%',
    paddingTop: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 15,
  },
  rating: {
    fontSize: 16,
    marginRight: 5,
  },
  point: {
    fontSize: 12,
    marginRight: 5,
  },
  titleDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -10,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'left',
  },
  showMore: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  quantityContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    flexDirection: 'column',
    flex: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 15,
  },
  customerReviews: {
    marginHorizontal: -16,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  quantity: {
    marginHorizontal: 6,
    fontSize: 16,
  },
  quantityButton: {
    backgroundColor: '#fff',
    width: 18,
    height: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2F2D2C',
  },
  buttonText: {
    color: '#2F2D2C',
    fontSize: 12,
  },
  addToCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    height: 50,
    borderRadius: 10,
  },
});
