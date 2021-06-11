import styled, { css } from "styled-components";

const NotAuth = styled.h2`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LeaderboardWrapper = styled.div`
  display: grid;
  gap: 2%;
  grid-template-columns: 25% 70%;
  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

const LevelSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button<{ selected?: boolean }>`
  width: 100%;
  font-size: 1.4rem;
  height: 4.07rem;
  border: 1px solid #d2d2d2;
  border-bottom: none;
  border-radius: 0;
  color: #585858;
  background-color: #f8f8f8;
  ${props => props.selected && css`
    background-color: #ececec;
    color: #292929;
  `}
  &:hover {}
  &:first-of-type {
    border-radius: 10px 10px 0 0;
  }
  &:last-of-type {
    border-bottom: 1px solid #d2d2d2;
    border-radius: 0 0 10px 10px;
  }
`;

const LeaderTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    margin: 0 1rem 3rem 1rem;
  }
`;

const Title = styled.h1`
  margin: 1.5rem;
`;

const TableContainer = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #d2d2d2;
`;

const TableRow = styled.div<{ head?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  padding: 1rem;
  color: #292929;
  &:last-of-type {
    border: none;
  }
  ${props => props.head && css`
    border-radius: 10px 10px 0 0;
    color: #585858;
    background-color: #f5f5f5;
  `}
`;

const TableCell = styled.div`
  padding: 0 .5rem;
  width: 100%;
  height: 2rem;
  overflow: hidden;
  text-align: center;
`;

const SelectLevel = styled.h2`
  font-weight: 500;
`;

export { NotAuth, Title, Button, LeaderboardWrapper, LeaderTable,
          TableCell, TableContainer, TableRow, Loading, LevelSelect, SelectLevel};