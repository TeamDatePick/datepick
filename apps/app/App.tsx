import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <OnboardingScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
