import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import MainRouter from './MainRouter';
import {RootStackParamList} from '../type/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

export const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="MainRouter" component={MainRouter} />
    </Stack.Navigator>
  );
};

export default RootRouter;
