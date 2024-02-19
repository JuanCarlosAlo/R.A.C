import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './routes/DrawerNavigator';
import { AuthProvider } from './providers/Auth.provider';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DrawerNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
