import styled from 'styled-components';

const KeyWord = ({ str }) => {
  return <Container># {str}</Container>;
};
export default KeyWord;

const Container = styled.div`
  height: 20px;
  box-sizing: content-box;
  display: flex;
  align-items: flex-end;
  padding: 6px 16px;

  margin-top: 5px;
  margin-right: 5px;

  border: 1px solid var(--color-gray-200);
  border-radius: 30px;

  color: var(--color-gray-100);
`;
