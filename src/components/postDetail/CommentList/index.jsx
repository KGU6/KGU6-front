import { useEffect, useRef, useState } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet } from 'react-spring-bottom-sheet';
import {
  CommentListContainer,
  CommentListItemContainer,
  Container,
} from './CommentList.style.js';
import PostHeaderInfo from '../PostHeaderInfo.jsx';
import CommentInputBox from './CommentInputBox.jsx';

const CommentList = ({ comments }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newcomment, setNewComment]= useState(null);
  const sheetRef = useRef(null);

  const addComment = (newComment) => {
    console.log(newComment);
    const newCommentData = {
      profileImg: '', // 기본 이미지 또는 프로필 이미지
      name: '익명 사용자', // 작성자 이름, 로그인된 유저라면 유저 이름을 사용
      time: new Date().toLocaleString(), // 현재 시간
      content: newComment, // 댓글 내용
    };

    setNewComment(newCommentData);
  };

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
      footer={<CommentInputBox onSubmit={addComment} />}
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
            <button>답글달기</button>
            {newcomment&&
            <>
              <PostHeaderInfo
              profileImg={''}
              name={'익명 사용자'}
              time={'2024.09.29'}
              />
                {newcomment.content}
              <button>답글달기</button>
            </>}
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
