import {Text, View} from 'react-native';
import FixedLayout from '../../components/layouts/FixedLayout';
import styled from 'styled-components/native';

export const HomeScreen = () => {
  return (
    <FixedLayout>
      <LocationSearchInputContainer>
        <LocationSearchInputBar placeholder="내 동네 검색" />
        <LocationSearchInputBar placeholder="상대방 동네 검색" />
      </LocationSearchInputContainer>
      <PlacePickContainer>
        <PlacePickText>장소 뽑기</PlacePickText>
        <PlacePickButton>
          <PickButtonText>START</PickButtonText>
        </PlacePickButton>
      </PlacePickContainer>
    </FixedLayout>
  );
};

const LocationSearchInputContainer = styled.View``;

const InputBarContainer = styled.View`
  flex-direction: row;
  height: 48px;
  background-color: #f5f6f7;
  margin-bottom: 5px;
`;

const PlacePickContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #d9d9d9;
`;

const PlacePickText = styled.Text`
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  color: white;
  margin-bottom: 50px;
`;

const PlacePickButton = styled.TouchableOpacity`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: #333333;
  align-items: center;
  justify-content: center;
`;

const PickButtonText = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;

const LocationSearchInputBar = ({placeholder}: {placeholder: string}) => {
  return (
    <InputBarContainer>
      <Text>{placeholder}</Text>
    </InputBarContainer>
  );
};
export default HomeScreen;
