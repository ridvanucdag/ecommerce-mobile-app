import { Review, reviews } from '@data/reviews';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './reviews.style';
import { useTranslation } from 'react-i18next';

const Card: React.FC<{ children: React.ReactNode; style?: object }> = ({
  children,
  style,
}) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <View style={styles.cardContent}>{children}</View>;
};

const Star: React.FC<{ size: number; filled: boolean }> = ({ size, filled }) => (
  <View style={{ width: size, height: size }}>
    <Text style={{ color: filled ? 'yellow' : 'lightgray' }}>⭐</Text>
  </View>
);

const averageRating: string = (
  reviews?.reduce((acc, review) => acc + review?.rating, 0) / reviews?.length
)?.toFixed(1);

const starDistribution = [0, 0, 0, 0, 0];
reviews?.forEach((review) => {
  starDistribution[5 - review.rating] += 1;
});

const totalReviews = reviews.length;
const starPercentages = starDistribution?.map((count) =>
  ((count / totalReviews) * 100).toFixed(1)
);

const CustomerReviews: React.FC = () => {
  const [visibleReviews, setVisibleReviews] = useState(3);
  const { t } = useTranslation();
  const [shuffledReviews, setShuffledReviews] = useState<Review[]>([]);

  useEffect(() => {
    const shuffleArray = (array: any[]) => {
      const shuffled = [...array];
      for (let i = shuffled?.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledReviews(shuffleArray(reviews));
  }, []);

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => Math.min(prev + 3, shuffledReviews.length));
  };

  return (
    <View style={styles.container}>
      <View style={styles.averageRating}>
        <View style={styles.averageRatings}>
          <Text style={styles.ratingNumber}>{averageRating}</Text>
          <View style={styles.stars}>
            {Array.from({ length: 5 })?.map((_, index) => (
              <Star
                key={index}
                size={20}
                filled={index < Math.round(Number(averageRating))}
              />
            ))}
          </View>
          <Text style={styles.reviewsCount}>
            {totalReviews} {t('productDetails.comment')}
          </Text>
        </View>
        <View style={styles.starDistribution}>
          {starDistribution?.map((count, index) => (
            <View key={index} style={styles.starRow}>
              <View style={styles.starRowContent}>
                <Text style={styles.starText}>
                  {5 - index} {t('productDetails.star')}
                </Text>
                <View style={styles.starBar}>
                  <View
                    style={[
                      styles.starFill,
                      {
                        width: `${parseFloat(starPercentages[index])}%`,
                        backgroundColor: getStarColor(index),
                      },
                    ]}
                  />
                </View>
              </View>
              <Text style={styles.starPercentage}>
                {starPercentages[index]}%
              </Text>
            </View>
          ))}
        </View>
      </View>
      <FlatList
        data={shuffledReviews?.slice(0, visibleReviews)}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item: review }) => (
          <Card key={review.id} style={styles.reviewCard}>
            <CardContent>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>{review.name}</Text>
                <View style={styles.reviewStars}>
                  {Array.from({ length: 5 })?.map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      filled={index < review.rating}
                    />
                  ))}
                </View>
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </CardContent>
          </Card>
        )}
        contentContainerStyle={styles.reviewContainer}
        ListFooterComponent={
          visibleReviews < shuffledReviews.length ? (
            <TouchableOpacity onPress={loadMoreReviews}>
              <Text style={styles.loadMore}>{t('productDetails.loadMore')}</Text>
            </TouchableOpacity>
          ) : null
        }
      />
    </View>
  );
};

const getStarColor = (index: number) => {
  switch (index) {
    case 0:
      return '#34C759';
    case 1:
      return '#6F42C1';
    case 2:
      return '#FF9500';
    case 3:
      return 'red';
    default:
      return '#222222';
  }
};

export default CustomerReviews;
