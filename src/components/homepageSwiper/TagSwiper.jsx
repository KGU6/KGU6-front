import React, { useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const tagData = [
  { tag: "휴식" },
  { tag: "식도락" },
  { tag: "모험적인" },
  { tag: "가족" },
  { tag: "동남아" },
];

const TagSwiper = () => {
  const [activeTags, setActiveTags] = useState([]); // 다중 태그 선택을 위한 배열

  const handleTagClick = (tag) => {
    if (activeTags.includes(tag)) {
      // 이미 활성화된 태그라면 배열에서 제거
      setActiveTags(activeTags.filter((activeTag) => activeTag !== tag));
    } else {
      // 활성화되지 않은 태그라면 배열에 추가
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <SwiperWrapper>
      <Swiper
        slidesPerView="auto" // 슬라이드의 너비가 자동으로 설정됩니다.
        spaceBetween={8} // 슬라이드 간 간격을 줄입니다.
        className="tagSwiper"
        freeMode={true} // freeMode를 활성화하여 슬라이드가 고정되지 않도록 합니다.
        modules={[FreeMode]}
        allowTouchMove={true}
        grabCursor={true} // 슬라이드에 손 모양의 커서가 표시됩니다.
      >
        {tagData.map((tag, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}> {/* 슬라이드 너비를 자동으로 설정 */}
            <Keyword
              active={activeTags.includes(tag.tag)}
              onClick={() => handleTagClick(tag.tag)}
            >
              {tag.tag}
            </Keyword>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default TagSwiper;

const SwiperWrapper = styled.div`
  width: 100%;
  padding: 9px 0px;
`;

const Keyword = styled.div`
  padding: 8px 16px;
  background-color: ${({ active }) => (active ? 'var(--color-main)' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : 'var(--color-main)')};
  border-radius: 20px;
  border: solid 1px var(--color-main);
  cursor: pointer;
  white-space: nowrap;
  width: auto;
  display: inline-block;
  text-align: center;
`;
