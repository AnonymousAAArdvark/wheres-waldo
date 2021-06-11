import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isCharacterFound, saveTimeInLeaderboard } from "../../utils/helper-functions";
import { startTimer, endTimer, getTimeDifferential, getCurrTimeDifferential } from "../../utils/time-helpers";
import Loader from "react-loader-spinner";
import { ILevels } from "../../types/level-types";
import { Loading, Img, CharactersBox, CharacterTitle, TimeTitle,
  LevelTitle, FinishedLevelTitle, LevelDesc, FinishedLevelContainer,
  ButtonContainer, ListButton, ButtonList, SelectButton, CharacterContainer,
  SelectorBoxWrapper, ImageContainer, Circle, FoundCircle, CharImg } from "../../styled-components/home/StyledGame";

type GameProps = {
  level: ILevels,
}

const Game = ({ level }: GameProps) => {
  const [selectorBoxCoords, setSelectorBoxCoords] = useState<Array<number>>([]);
  const [selectorBoxPercent, setSelectorBoxPercent] = useState<Array<number>>([]);
  const [showSelectorBox, setShowSelectorBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLevelOver, setIsLevelOver] = useState(false);
  const [charactersFound, setCharactersFound] = useState<any>([]);
  const [charactersNotFound, setCharactersNotFound] = useState<Array<string>>(level.characters);
  const [charImages, setCharImages] = useState<Array<string>>(level.charImages);
  const [screenTimer, setScreenTimer] = useState("");

  useEffect(() => {
    let intervalId = setInterval(() => { updateTimer() }, 500);
    if(!isLevelOver) {
      startTimer();
    }
    return () => clearInterval(intervalId);
  }, [isLevelOver]);

  useEffect(() => {
    if(charactersNotFound.length === 0) {
      endTimer();
      saveTimeInLeaderboard(getTimeDifferential(), level);
    }
    setIsLevelOver(charactersNotFound.length === 0);
    return () => endTimer();
  }, [charactersNotFound, level]);

  const updateTimer = () => {
    setScreenTimer(getCurrTimeDifferential());
  }

  const restartLevel = () => {
    setCharactersFound([]);
    setCharactersNotFound(level.characters);
    setCharImages(level.charImages);
  };

  const handleImageClick = (e: any) => {
    const xCoordPercent = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target!.offsetWidth) * 100
    );
    const yCoordPercent = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target!.offsetHeight) * 100
    );
    console.log([xCoordPercent, yCoordPercent])
    setSelectorBoxCoords([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
    setSelectorBoxPercent([xCoordPercent, yCoordPercent]);
    setShowSelectorBox(true);
  };

  const handleCharacterClick = async (character: string, coordinates: Array<number>, percents: Array<number>) => {
    setLoading(true);
    setShowSelectorBox(false);
    const isFound = await isCharacterFound(character, level, percents);
    setLoading(false);

    if(isFound) {
      const idx = charactersNotFound.findIndex((char: string) => char === character);
      const newNotFoundCharacters = charactersNotFound.filter((_: string, i: number) => i !== idx);
      const newCharImages = charImages.filter((_: string, i: number) => i !== idx);
      setCharactersNotFound(newNotFoundCharacters);
      setCharImages(newCharImages);
      setCharactersFound([...charactersFound, { character, coordinates }]);
    }
  };

  if(isLevelOver)
    return (
      <FinishedLevelContainer>
        <FinishedLevelTitle>Congratulations! You beat {level.name}</FinishedLevelTitle>
        <TimeTitle>Your time was {getTimeDifferential()}</TimeTitle>
        <ButtonContainer>
          <Link to="/levels" className="link">
            <SelectButton>Select a new level</SelectButton>
          </Link>
          <SelectButton onClick={() => restartLevel()}>Play again?</SelectButton>
        </ButtonContainer>
      </FinishedLevelContainer>
    );

  return (
    <>
      <LevelTitle>{level.name} - {screenTimer}</LevelTitle>
      <LevelDesc>Find the following characters in the shortest time possible: </LevelDesc>
      <CharactersBox>
        {loading ?
          <Loading>
            <Loader
              type="TailSpin"
              color="#000000"
              height={50}
              width={50}
            />
          </Loading> :
          charactersNotFound.map((character: string, i: number) => (
            <CharacterContainer key={i}>
              <CharImg src={charImages[i]} />
              <CharacterTitle>{character[0].toUpperCase() + character.slice(1)}</CharacterTitle>
            </CharacterContainer>
          ))
        }
      </CharactersBox>
      <ImageContainer>
        <Img src={level.image} onClick={(e: React.MouseEvent) => handleImageClick(e)} alt={level.name} />

        {charactersFound.map(
          (character: { character: string; coordinates: Array<number> }) => (
            <FoundCircle key={character.character} coords={character.coordinates} />
          )
        )}

        {showSelectorBox && (
          <SelectorBoxWrapper coords={selectorBoxCoords}>
            <Circle />
            <ButtonList coords={selectorBoxCoords}>
              {charactersNotFound.map((character: string) => (
                <ListButton
                  key={character}
                  onClick={() => handleCharacterClick(character, selectorBoxCoords, selectorBoxPercent)}
                >
                  {character}
                </ListButton>
              ))}
            </ButtonList>
          </SelectorBoxWrapper>
        )}
      </ImageContainer>
    </>
  );
};

export default Game;
