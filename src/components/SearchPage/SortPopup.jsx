import styled from "styled-components";
import PropTypes from "prop-types";
import CloseIcon from "@/assets/icons/close.svg?react";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const PopupContent = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 20px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700%;
`;

const SortOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SortOption = styled.button`
  border: 1.5px solid ${(props) => (props.$active ? "#97DF47" : "#95989D")};
  color: ${(props) => (props.$active ? "#97DF47" : "#95989D")};
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  width: 48%;
  text-align: center;
`;

const Close = styled(CloseIcon)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const SortPopup = ({ onClear, sortOption, setSortOption }) => {
  return (
    <PopupOverlay>
      <PopupContent>
        <TitleWrapper>
          <Title>정렬기준</Title>
          <Close onClick={onClear} />
        </TitleWrapper>
        <SortOptionWrapper>
          <SortOption
            $active={sortOption === "latest"}
            onClick={() => setSortOption("latest")}
          >
            최신순
          </SortOption>
          <SortOption
            $active={sortOption === "relevance"}
            onClick={() => setSortOption("relevance")}
          >
            정확도순
          </SortOption>
        </SortOptionWrapper>
      </PopupContent>
    </PopupOverlay>
  );
};

SortPopup.propTypes = {
  onClear: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
  setSortOption: PropTypes.func.isRequired,
};

export default SortPopup;
