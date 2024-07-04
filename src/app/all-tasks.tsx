import { Stack, useNavigation } from 'expo-router';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useEffect } from 'react';
import Home from '@/templates/Home';
import Header from '@/components/Header';
import getWeekDay from '@/utils/getWeekDay';
import Test from '@/templates/Test';
import AllTasks from '@/templates/AllTasks';

export default function HomePage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ 
      headerShown: true,
      headerTitle: () => <Header title='Lista de Metas'/>, 
    });
  }, [navigation]);

  // return (<Test/>);
  return (<AllTasks/>);
}
