import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

export const OnboardingScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles(isDarkMode).safeAreaView}>
      <HomeScreenContainer>
        <TitleContainer>
          <AppTitle>DATE PICK</AppTitle>
        </TitleContainer>
        <TouchableOpacity
          style={styles(isDarkMode).button}
          onPress={() => {
            console.log('start button pressed');
          }}>
          <StartText>데이트픽 시작하기</StartText>
        </TouchableOpacity>
      </HomeScreenContainer>
    </SafeAreaView>
  );
};

const HomeScreenContainer = styled.View`
  justify-content: center;
  flex: 1;
`;

const TitleContainer = styled.View`
  flex: 1;
`;

const AppTitle = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  margin-top: auto;
  margin-bottom: auto;
`;

const StartText = styled.Text`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

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

export default OnboardingScreen;
