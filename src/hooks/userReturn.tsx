import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserHook() {
  const [user, setUser] = useState<User | null>(null);
  const [firstOpen, setFirstOpen] = useState(false);

  useEffect(() => {
    const verifyFirstOpen = async () => {
      try {
        const value = await AsyncStorage.getItem('firstOpen');
        if (value === null) {
          await AsyncStorage.setItem('firstOpen', 'true');
          setFirstOpen(true);
        } else {
          setFirstOpen(false);
        }
      } catch (error) {
        console.error('Erro ao acessar AsyncStorage:', error);
      }
    };

    verifyFirstOpen();
  }, []);

  return { user, firstOpen };
}
