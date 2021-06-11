import styled from "styled-components";

const LevelsContainer = styled.div`
  margin: 30px auto;  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LevelsGrid = styled.div`
  display: grid;
  justify-content: center;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  
`;

export { LevelsContainer, LevelsGrid, Item, Title };