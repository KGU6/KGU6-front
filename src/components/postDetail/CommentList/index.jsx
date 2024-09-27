import { useRef } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet } from 'react-spring-bottom-sheet';
import {
  CommentInput,
  CommentListContainer,
  CommentListItemContainer,
  Container,
} from './CommentList.style.js';
import PostHeaderInfo from '../PostHeaderInfo.jsx';

const CommentList = ({ comments }) => {
  const sheetRef = useRef(null);

  return (
    <BottomSheet
      open
      blocking={false}
      ref={sheetRef}
      defaultSnap={() => 80}
      snapPoints={({ maxHeight }) => [
        Math.floor(maxHeight * 0.9),
        Math.floor(maxHeight * 0.4),
        80,
      ]}
      expandOnContentDrag
      // onSpringEnd={() => setPostListHeight(sheetRef.current?.height || 0)}
      footer={<CommentInput placeholder={'댓글을 입력하세요'} />}
    >
      <Container>
        <CommentListContainer>
          <CommentListItemContainer>
            <PostHeaderInfo
              profileImg={''}
              name={'이준석'}
              time={'2024.09.25'}
            />
            안녕하세요
          </CommentListItemContainer>
        </CommentListContainer>
      </Container>
    </BottomSheet>
  );
};

export default CommentList;

const CommentListItem = () => {
  return <CommentListItemContainer>안녕하세요</CommentListItemContainer>;
};
