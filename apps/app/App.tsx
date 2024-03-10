import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import RootRouter from './src/router/RootRouter';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
