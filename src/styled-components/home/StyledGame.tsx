import styled from "styled-components";

type CoordsProps = {
  coords: Array<number>;
};

const FinishedLevelContainer = styled.div`
  margin: 50px; 
  padding: 1rem;
  border-radius: 5px;
  border: 3px solid lightgray;
  background-color: #f5f5f5;
`;

const FinishedLevelTitle = styled.h1`
  text-align: center;
  margin: 10px;
  font-size: 2.5rem;
`;

const TimeTitle = styled.h3`
  text-align: center;  
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 1rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  .link {
    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;

const SelectButton = styled.button`
  padding: 1rem;
  margin: .5rem;
  font-size: 1.5rem;
  width: 15rem;
  @media (max-width: 700px) {
    width: 100%;
    margin: .5rem 0;
  }
`;

const LevelTitle = styled.h2`
  text-align: center;
  margin: 10px;
  font-size: 2rem;
`;

const LevelDesc = styled.h5`
  text-align: center;
  margin: 10px;
  font-size: 1.2rem;
`;

const CharactersBox = styled.div`
  display: flex;
  justify-content: center;
`;

const CharacterContainer = styled.div`
  display: flex;
  align-items: center;  
  flex-direction: column;
`;

const CharImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: .3rem 0;
`;

const CharacterTitle = styled.h6`
  text-align: center;
  margin: 0 7px;
  font-size: 1rem;
  line-height: 1rem;
`;

const ImageContainer = styled.div`
  width: 1280px;
  position: relative;
  overflow-y: hidden;
  overflow-x: auto;
  max-width: 95%;
  padding: 0;
  margin: 22px auto;
`;

const Img = styled.img`
  width: 1280px;
`;

const FoundCircle = styled.div<CoordsProps>`
  position: absolute;
  left: ${(props) => (props.coords[0] - 25).toString() + "px"};
  top: ${(props) => (props.coords[1] - 25).toString() + "px"};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 0 10px 2px black;
`;

const SelectorBoxWrapper = styled.div<CoordsProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  left: ${(props) => (props.coords[0] - 25).toString() + "px"};
  top: ${(props) => (props.coords[1] - 25).toString() + "px"};
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid white;
  box-shadow: 0 0 10px 2px black;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
`;

const ButtonList = styled.div<CoordsProps>`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.coords[0] < 640 ? "60px" : "-160px")};
  margin-top: ${(props) => (props.coords[1] > 620 ? "-100px" : props.coords[1] < 20 ? "20px" : "0")};
  box-shadow: 1px 3px 10px black;
  width: fit-content;
  border-radius: 5px;
`;

const ListButton = styled.button`
  pointer-events: auto;
  width: 150px;
  text-transform: capitalize;
  padding: .5rem;
  border-radius: 0;
  border: none;
  border-top: 1px solid darkgray;
  background-color: white;
  color: #2b2b2b;

  &:first-of-type {
    border-top: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-of-type {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:hover {
    background-color: #efefef;
    color: black;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
`;

export { Loading, Img, CharactersBox, CharacterTitle, TimeTitle, CharImg,
         LevelTitle, FinishedLevelTitle, LevelDesc, FinishedLevelContainer,
         ButtonContainer, ListButton, ButtonList, SelectButton, CharacterContainer,
         SelectorBoxWrapper, ImageContainer, Circle, FoundCircle };