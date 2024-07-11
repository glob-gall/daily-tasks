import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import Header from '@/components/Header';
import getWeekDay from '@/utils/getWeekDay';
import Donate from '@/templates/Donate';
import About from '@/templates/About';

export default function DonatePage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ 
      headerShown: true,
      headerTitle: () => <Header title='Informações adicionais' 
      subtitle='conheça mais sobre o projeto'
      />, 
    });
  }, [navigation]);

  // return (<Test/>);
  return (<About/>);
}
