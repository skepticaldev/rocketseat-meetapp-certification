import styled from 'styled-components';

export const MeetupItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  padding: 0 30px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 10px;

  strong {
    font-size: 18px;
    color: #fff;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      font-size: 16px;
      color: #fff;
      opacity: 0.6;
      margin-right: 10px;
    }
  }
`;
