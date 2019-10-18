import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  margin: 50px auto;
  max-width: 940px;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 32px;
    }

    div {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  color: #fff;
  background: ${props => props.color};
  height: 42px;
  border-radius: 4px;
  font-weight: bold;
  margin-left: 15px;
  font-size: 16px;
  padding: 0 30px;

  &:hover {
    background: ${props => darken(0.08, props.color)};
  }

  span {
    margin-left: 10px;
  }
`;

export const Details = styled.div`
  margin-top: 50px;

  img {
    width: 100%;
    max-width: 940px;
    height: 300px;
    object-fit: cover;
  }

  h2 {
    margin-top: 25px;
    font-weight: normal;
    color: #fff;
    font-size: 18px;
    text-align: justify;
    text-justify: distribute;
    line-height: 32px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  div {
    display: flex;
    align-items: center;
    margin-right: 50px;

    span {
      color: #fff;
      font-size: 16px;
      opacity: 0.6;
      margin-left: 10px;
    }
  }
`;
