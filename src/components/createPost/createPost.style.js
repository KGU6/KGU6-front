import styled from 'styled-components';

export const Title = styled.input`
  // 해당 css 그대로 사용 시 따로 컴포넌트 분리 필요
  width: 100%;

  margin: 14px 0;

  border: 1px solid var(--color-gray-200);
  border-radius: 10px;
  padding: 10px;
`;

const Button = styled.button`
  line-height: 42px;

  width: 94px;
  height: 40px;

  border-radius: 30px;

  margin-right: 10px;
`;

export const SaveButton = styled(Button)`
  color: white;
  background-color: var(--color-main);
`;
export const TempSaveButton = styled(Button)`
  color: var(--color-gray-100);
  border: 1px solid var(--color-gray-200);
`;

export const ButtonBox = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: right;
`;
