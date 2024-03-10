import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookmarkScreen from '../screens/bookmark/BookmarkScreen';
import HomeScreen from '../screens/home/HomeScreen';
import MoreScreen from '../screens/more/MoreScreen';
import {Image, ImageSourcePropType} from 'react-native';
import BookmarkTabImage from '../assets/images/bottomtab/bottomtab-bookmark.png';
import HomeTabImage from '../assets/images/bottomtab/bottomtab-home.png';
import MoreTabImage from '../assets/images/bottomtab/bottomtab-more.png';
const Tab = createBottomTabNavigator();

export const MainRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            BottomTabImage({focused, imageSource: HomeTabImage}),
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="BookmarkScreen"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({focused}) =>
            BottomTabImage({focused, imageSource: BookmarkTabImage}),
          tabBarLabel: '북마크',
        }}
      />
      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          tabBarIcon: ({focused}) =>
            BottomTabImage({focused, imageSource: MoreTabImage}),
          tabBarLabel: '더보기',
        }}
      />
    </Tab.Navigator>
  );
};

const BottomTabImage = ({
  focused,
  imageSource,
}: {
  focused: boolean;
  imageSource: ImageSourcePropType;
}) => {
  return (
    <Image
      source={imageSource}
      resizeMode="contain"
      style={{
        width: 25,
        height: 25,
        tintColor: focused ? '#000000' : '#CCCBCB',
      }}
    />
  );
};

export default MainRouter;
