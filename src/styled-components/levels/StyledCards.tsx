import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 25.7rem;
  border-radius: 5px;
  @media (max-width: 468px) {
    max-width: 300px;
  }
  &:hover {
    background-color: #f1f1f1;
  }
  &:active {
    background-color: #dedede;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: flex;
  padding-right: .5rem;
`;

const CharImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 1rem .5rem;
`;

const CardImg = styled.img`
  height: 15rem;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h5`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem;
`;

export { Card, CardImg, Title, TitleContainer, ImgContainer, CharImg };