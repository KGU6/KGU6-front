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

export const CommentInput = styled.input`
  // 해당 css 그대로 사용 시 따로 컴포넌트 분리 필요
  width: 100%;

  margin-bottom: 60px;

  border: 1px solid var(--color-gray-200);
  border-radius: 10px;
  padding: 10px;
`;
