import styled from "styled-components";

const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: white;
`;

const CardGrid = () => {
  return (
    <CardGridWrapper>
      <Card>Long Headline with Two Lines</Card>
      <Card>Long Headline with Two Lines</Card>
      <Card>Long Headline with Two Lines</Card>
    </CardGridWrapper>
  );
};

export default CardGrid;
