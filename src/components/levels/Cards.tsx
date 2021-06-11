import React from "react";
import { ILevels } from "../../types/level-types";
import { CardImg, Title, Card, TitleContainer,
         ImgContainer, CharImg } from "../../styled-components/levels/StyledCards";

type CardsProps = {
  level: ILevels,
}

const Cards = ({ level }: CardsProps) => {
  return (
    <Card>
      <CardImg src={level.image} />
      <TitleContainer>
        <Title>{level.name}</Title>
        <ImgContainer>
          {level.charImages.map((charImg, idx) => (
            <CharImg src={charImg} key={idx}/>
          ))}
        </ImgContainer>
      </TitleContainer>
    </Card>
  );
};

export default Cards;