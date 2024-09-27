import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 10px 20px;
`;

export const CommentListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 댓글 리스트가 남은 공간을 차지하게 설정 */
  overflow-y: auto; /* 리스트가 많아지면 스크롤 발생 */
`;

export const CommentListItemContainer = styled.li`
  padding: 10px 0;
`;

export const CommentInputBoxContainer = styled.div`
  display: flex;

  width: 100%;
  padding: 6px 10px;
  margin-bottom: 60px;
  border: 1px solid var(--color-gray-200);
  border-radius: 10px;

  & > input {
    width: 100%;
  }
`;
