import Image from '@components/Image';
import menuItems, {MenuItem} from '@data/menuItems';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './profile.styles';

const ProfileScreen = () => {
  const {t} = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={styles.profileContainer}>
        <Image
          uri={require('@assets/images/profile/ridvanucdag.jpg')}
          containerStyle={styles.profileImage}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.headerText}>Rıdvan Üçdağ</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems?.map((item: MenuItem, index: number) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item?.onPress}>
            <Icon
              name={item?.icon}
              size={24}
              color="#4CAF50"
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>{t(item?.title)}</Text>
            <Icon
              name="chevron-forward-outline"
              size={20}
              color="#999"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
