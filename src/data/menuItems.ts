import { Alert } from "react-native";

export interface MenuItem {
  title: string;
  icon: string;
  onPress: () => void;
}

const menuItems: MenuItem[] = [
  {
    title: 'profile.accountInfo', 
    icon: 'person-circle-outline',
    onPress: () => Alert.alert('Hesap Bilgileri Tıklandı!'),
  },
  {
    title: 'profile.myOrders',
    icon: 'cart-outline',
    onPress: () => Alert.alert('Siparişlerim Tıklandı!'),
  },
  {
    title: 'profile.addressBook',
    icon: 'location-outline',
    onPress: () => Alert.alert('Adres Defteri Tıklandı!'),
  },
  {
    title: 'profile.paymentMethods',
    icon: 'card-outline',
    onPress: () => Alert.alert('Ödeme Yöntemleri Tıklandı!'),
  },
  {
    title: 'profile.faq',
    icon: 'help-circle-outline',
    onPress: () => Alert.alert('SSS Tıklandı!'),
  },
  {
    title: 'profile.settings',
    icon: 'settings-outline',
    onPress: () => Alert.alert('Ayarlar Tıklandı!'),
  },
  {
    title: 'profile.logout',
    icon: 'log-out-outline',
    onPress: () => Alert.alert('Çıkış Yap Tıklandı!'),
  },
];

export default menuItems;
