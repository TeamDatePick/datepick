import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookmarkScreen from '../screens/bookmark/BookmarkScreen';
import HomeScreen from '../screens/home/HomeScreen';
import MoreScreen from '../screens/more/MoreScreen';

const Tab = createBottomTabNavigator();

export const MainRouter = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="BookmarkScreen"
        component={BookmarkScreen}
        options={{
          tabBarLabel: '북마크',
        }}
      />
      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          tabBarLabel: '더보기',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainRouter;
