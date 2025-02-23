import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.05)',
      maxWidth: 600,
      padding: 2,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    averageRating: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    averageRatings: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ratingNumber: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    stars: {
      flexDirection: 'row',
    },
    reviewsCount: {
      marginLeft: 10,
      color: '#555',
      fontSize: 16,
    },
    reviewCard: {
      borderWidth: 1,
      borderColor: '#e0e0e0',
      borderRadius: 8,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    reviewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    reviewerName: {
      fontWeight: 'bold',
      fontSize: 18,
      marginRight: 10,
    },
    reviewStars: {
      flexDirection: 'row',
    },
    reviewComment: {
      color: '#555',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 15,
    },
    cardContent: {
      padding: 10,
    },
    starDistribution: {
      alignItems: 'flex-end',
      width: '70%',
    },
    starRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      justifyContent: 'space-between',
      width: '90%',
    },
    starRowContent: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '70%',
    },
    starText: {
      fontSize: 13,
      marginRight: 10,
    },
    starBar: {
      width: '80%',
      height: 8,
      backgroundColor: '#e0e0e0',
      borderRadius: 4,
    },
    starFill: {
      height: '100%',
      borderRadius: 4,
    },
    starPercentage: {
      marginLeft: 5,
      fontSize: 13,
    },
    reviewContainer: {
      paddingBottom: 10,
    },
    loadMore: {
      color: '#007BFF',
      textAlign: 'center',
      marginVertical: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });