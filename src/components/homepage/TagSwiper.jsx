import React, { useEffect } from 'react';
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
  { tag: "북유럽" },
];

const TagSwiper = ({ selectedTags, setSelectedTags }) => {

  useEffect(() => {
    if (selectedTags.length === 0) {
      setSelectedTags([tagData[0].tag]);
    }
  }, [setSelectedTags, selectedTags]);
  // 태그 클릭 시 상태 변경
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      // 이미 활성화된 태그를 클릭한 경우 비활성화 (배열을 빈 값으로 만듦)
      setSelectedTags([]);
    } else {
      // 선택한 태그만 활성화
      setSelectedTags([tag]);
    }
  };

  return (
    <SwiperWrapper>
      <Swiper
        slidesPerView='auto'
        spaceBetween={8}
        className='tagSwiper'
        freeMode={true}
        modules={[FreeMode]}
        style={{ width: '390px', height: '34px' }}
        allowTouchMove={true}
      >
        {tagData.map((tag, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <Keyword
              active={selectedTags.includes(tag.tag)}
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
  width: calc(100vw + 40px);
  min-height: 33px;
  position: relative;
  left: -20px;
  margin-top: 10px;
`;

const Keyword = styled.div`
  padding: 8px 16px;
  background-color: ${({ active }) =>
    active ? 'var(--color-main)' : 'transparent'};
  color: ${({ active }) => (active ? 'white' : 'var(--color-main)')};
  border-radius: 20px;
  border: solid 1px var(--color-main);
  cursor: pointer;
  white-space: nowrap;
  width: auto;
  display: inline-block;
  text-align: center;
`;
