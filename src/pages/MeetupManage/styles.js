import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input,
    textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      font-size: 16;
      height: 150px;
      line-height: 21px;
      resize: none;
      padding-top: 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    > span {
      color: #fb6f91;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 4px;
  width: 180px;
  height: 42px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  align-self: flex-end;
  font-size: 16px;

  &:hover {
    background: ${darken(0.08, '#f94d6a')};
  }

  span {
    margin-left: 10px;
  }
`;
