import styled from 'styled-components';

export const Container = styled.div`
  width: 940px;
  height: 300px;
  margin-bottom: 30px;

  label {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 940px;
    height: 300px;
    cursor: pointer;
    object-fit: cover;
    background: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.4);

    &:hover {
      opacity: 0.7;
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      strong {
        font-size: 20px;
      }

      span {
        color: #f64c75;
        align-self: flex-start;
        margin-top: 10px;
        font-weight: bold;
      }
    }

    img {
      width: 100%;
      align-self: center;
      max-width: 940px;
      object-fit: cover;
      height: 300px;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;

export const ImagePreview = styled.div``;
