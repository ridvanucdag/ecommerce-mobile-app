import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {styles} from './main.style';
import {images} from './main.type';

const MainScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigate = (): void => {
    navigation.navigate('Tab', {
      screen: 'AnaSayfa',
      params: {title: t('home.title')},
    });
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Görsel */}
      <ImageBackground
        source={images[currentIndex]}
        style={styles.imageBackground}
        resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.title}>{t(`main.title${currentIndex + 1}`)}</Text>
          <Text style={styles.subtitle}>
            {t(`main.description${currentIndex + 1}`)}
          </Text>
          {currentIndex === images.length - 1 && (
            <TouchableOpacity style={styles.button} onPress={handleNavigate}>
              <Text style={styles.buttonText}>{t('main.started')}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>

      {/* Ok butonları */}
      <View style={styles.navigationButtons}>
        {currentIndex > 0 && (
          <TouchableOpacity
            onPress={handlePrevious}
            style={styles.arrowButtonLeft}>
            <Text style={styles.arrowText}>{'<'}</Text>
          </TouchableOpacity>
        )}
        {currentIndex < images.length - 1 && (
          <TouchableOpacity
            onPress={handleNext}
            style={styles.arrowButtonRight}>
            <Text style={styles.arrowText}>{'>'}</Text>
          </TouchableOpacity>
        )}
      </View>

      {currentIndex !== images.length - 1 && (
        <TouchableOpacity onPress={handleNavigate} style={styles.skipButton}>
          <Text style={styles.skipText}>{t('main.skip')}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.indicatorContainer}>
        {images?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
