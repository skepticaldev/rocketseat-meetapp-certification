import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 940px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    h1 {
      color: #fff;
      font-size: 32px;
    }
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  background: #f94d6a;
  border: 0;
  border-radius: 4px;
  height: 42px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 0 32px;
  text-align: center;

  &:hover {
    background: ${darken(0.08, '#f94d6a')};
  }

  span {
    margin-left: 10px;
  }
`;
