import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import Header from '@/components/Header';
import getWeekDay from '@/utils/getWeekDay';
import Donate from '@/templates/Donate';

export default function DonatePage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ 
      headerShown: true,
      headerTitle: () => <Header title='Faça uma doação' 
      subtitle='Ajude a financiar este projeto'
      />, 
    });
  }, [navigation]);

  // return (<Test/>);
  return (<Donate/>);
}
