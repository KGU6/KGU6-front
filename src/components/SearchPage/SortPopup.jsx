import styled from "styled-components";
import PropTypes from "prop-types";

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
  max-width: 400px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 20px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
`;

const SortOption = styled.button`
  background: ${(props) => (props.$active ? "#E5F4DD" : "#fff")};
  border: 1px solid ${(props) => (props.$active ? "#7BA24F" : "#D3D3D3")};
  color: ${(props) => (props.$active ? "#7BA24F" : "#000")};
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const SortPopup = ({ onClose, sortOption, setSortOption }) => {
  return (
    <PopupOverlay>
      <PopupContent>
        <Title>정렬기준</Title>
        <CloseButton onClick={onClose}>✖</CloseButton>
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
      </PopupContent>
    </PopupOverlay>
  );
};

SortPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
  setSortOption: PropTypes.func.isRequired,
};

export default SortPopup;
