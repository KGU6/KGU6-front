import styled from 'styled-components';

export const Title = styled.input``;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: right;

  & > button {
    line-height: 42px;

    width: 94px;
    height: 40px;

    border: 1px solid black;
    border-radius: 30px;

    margin-right: 10px;
  }
`;
