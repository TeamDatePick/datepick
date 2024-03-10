import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const FixedLayout = ({children}: {children: React.ReactNode}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles(isDarkMode).safeAreaView}>
      {children}
    </SafeAreaView>
  );
};

const styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    safeAreaView: {
      backgroundColor: isDarkMode ? Colors.dark : Colors.white,
      flex: 1,
    },
  });

export default FixedLayout;
