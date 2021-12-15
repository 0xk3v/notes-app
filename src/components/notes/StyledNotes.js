import styled, { keyframes } from "styled-components";
import { FaPlus } from "react-icons/fa";
import { bounceInLeft, bounceInDown } from "react-animations";

// Transitions
const bounceAnimation = keyframes`${bounceInLeft}`;
const bounceAnimation2 = keyframes`${bounceInDown}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.primaryColor};
  width: 393px;
  height: 393px;
  border-radius: 38px;
  padding: 40px;
`;

export const NotesHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  animation: 2s ${bounceAnimation2};
  h1 {
    text-decoration: underline;
  }
`;

export const NotesBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  animation: 1s ${bounceAnimation};
`;

export const NoteItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.3rem;
`;

export const NotesButton = styled(FaPlus)`
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.textColor};
  position: absolute;
  margin-top: 260px;
  margin-left: 260px;
  outline: none;
  padding: 14px;
  width: 57px;
  height: 57px;
  border-radius: 100%;
  font-size: 0.5rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  animation: 1s ${bounceAnimation};
`;
