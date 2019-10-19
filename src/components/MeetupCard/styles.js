import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const Banner = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Content = styled.View`
  padding: 18px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Field = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export const TextField = styled.Text`
  font-size: 13px;
  color: #999;
  margin-left: 5px;
`;
