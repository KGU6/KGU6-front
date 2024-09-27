import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: baseline;

  color: var(--color-gray-100);

  margin-bottom: 10px;
`;

export const PlusButton = styled.button`
  width: 26px;
  height: 26px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--color-gray-200);
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px #00000040;

  margin-right: 10px;
`;
