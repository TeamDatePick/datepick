import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles(isDarkMode).safeAreaView}>
      <Text>this is home screen</Text>
    </SafeAreaView>
  );
};

const styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    safeAreaView: {
      backgroundColor: isDarkMode ? Colors.dark : Colors.white,
      flex: 1,
    },
    normal: {
      backgroundColor: 'orange',
      height: 100,
    },
    button: {
      backgroundColor: '#efefef',
    },
  });

export default HomeScreen;
