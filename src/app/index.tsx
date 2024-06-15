import { Stack, useNavigation } from 'expo-router';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useEffect } from 'react';
import Home from '@/templates/Home';
import Header from '@/components/Header';

export default function HomePage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ 
      headerShown: true,
      headerTitle: () => <Header title='Metas de hoje' subtitle='Quarta-Feira'/>, 

    });
  }, [navigation]);

  return (<Home/>);
}
