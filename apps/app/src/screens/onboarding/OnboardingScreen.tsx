import {useNavigation} from '@react-navigation/core';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import {RootStackParamList} from '../../type/RootStackParamList';
import {StackScreenProps} from '@react-navigation/stack';
import FixedLayout from '../../components/layouts/FixedLayout';
type OnboardingScreenProps = StackScreenProps<
  RootStackParamList,
  'OnboardingScreen'
>;

export const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const handleStartButtonPress = () => {
    navigation.replace('MainRouter', {});
  };

  return (
    <FixedLayout>
      <HomeScreenContainer>
        <TitleContainer>
          <AppTitle>DATE PICK</AppTitle>
        </TitleContainer>
        <TouchableOpacity
          style={styles(isDarkMode).button}
          onPress={handleStartButtonPress}>
          <StartText>데이트픽 시작하기</StartText>
        </TouchableOpacity>
      </HomeScreenContainer>
    </FixedLayout>
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
    button: {
      backgroundColor: '#efefef',
    },
  });

export default OnboardingScreen;
