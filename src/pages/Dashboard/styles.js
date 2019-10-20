import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const DateHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 0 20px;
`;

export const DateButton = styled.TouchableOpacity``;

export const DateText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;
