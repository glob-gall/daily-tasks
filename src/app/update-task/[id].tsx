
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import Header from '@/components/Header';
import UpdateTask from '@/templates/UpdateTask';

export default function RegisterTaskPage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ 
      headerShown: true,
      headerTitle: () => <Header title='Editar meta'/>, 
    });
  }, [navigation]);

  return (<UpdateTask/>);
}

