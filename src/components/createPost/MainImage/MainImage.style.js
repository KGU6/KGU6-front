import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: -6px 0 20px 0;
`;

export const Label = styled.label`
  padding: 8px 14px;
  color: white;

  border-radius: 10px;
  background-color: var(--color-main);
`;

export const ImgFile = styled.input`
  display: none;
`;

export const Image = styled.div`
  width: 100%; // 너비를 명시적으로 지정
  height: 200px; // max-height 대신 고정 높이 사용
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; // 이미지를 중앙으로 정렬
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;

  & > button {
    padding: 8px 14px;
    color: white;

    border-radius: 10px;
    background-color: var(--color-gray-200);
  }
`;
