import styled from "styled-components";

export const Title = styled.h2`
  margin: 20px 0;
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: #5c5e61;

  & > div {
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 5px;
    }
  }

  img {
  }
`;

export const Date = styled.div`
  font-weight: var(--weight-light);
  color: var(--color-gray-800);
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  margin-bottom: 20px;
`;

export const LikesBox = styled.div`
  display: flex;
  padding-bottom: 40px;
  gap: 10px;
`;

export const HeartIconBtn = styled.button`
  width: 15px;
  height: 15px;
  cursor: pointer;
  display: inline-block;

  svg {
    fill: ${(props) => (props.$liked ? "#FFAEAD" : "#BBBEC2")};
  }
`;

export const ArticleWrap = styled.article`
  line-height: initial;
  color: var(--color-gray-700);

  h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h3 {
    display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h4 {
    display: block;
    font-size: 1em;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h5 {
    display: block;
    font-size: 0.83em;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h6 {
    display: block;
    font-size: 0.67em;
    margin-top: 2.33em;
    margin-bottom: 2.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  ol {
    display: block;
    list-style-type: decimal;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
  }

  em {
    font-style: italic;
  }

  blockquote {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (max-width: 768px) {
    img {
      max-width: 300px;
    }
  }
`;
