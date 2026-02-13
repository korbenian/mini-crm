// providers/AuthProvider.tsx
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useUserStore } from './store/userStore';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const store = useUserStore.getState();

      if (!user) {
        store.clearUser();
        return;
      }

      const snap = await getDoc(doc(db, 'users', user.uid));

      if (snap.exists()) {
        const data = snap.data();

        store.setUser({
          uid: user.uid,
          email: user.email,
          name: data.name,
          avatarUrl: data.avatarUrl,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
