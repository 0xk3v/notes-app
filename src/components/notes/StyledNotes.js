import styled, { keyframes, css } from "styled-components";
import { FaPlus } from "react-icons/fa";
import { bounceInDown, bounceInLeft } from "react-animations";

// Transitions
const bounceAnimation = keyframes`${bounceInDown}`;
const bounceAnimation2 = keyframes`${bounceInLeft}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.primaryColor};
  width: 393px;
  height: 393px;
  border-radius: 38px;
  padding: 40px;
  animation: 1s ${bounceAnimation};
`;

export const NotesHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  h1 {
    text-decoration: underline;
    transition: .5s all ease-in;
`;

export const NotesBody = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  justify-content: space-between;
`;

export const NotesList = styled.div`
  flex-direction: column;
  display: ${({ isactive }) => (isactive ? "none" : "flex")};
  animation: 0.9s ${bounceAnimation};
  margin: 30px;
`;

export const NotesAdd = styled.div`
  display: ${({ isactive }) => (isactive ? "flex" : "none")};
  flex-direction: column;
  transition: 0.4s all ease-in-out;
  margin: 30px;
  ${({ isactive }) =>
    isactive &&
    css`
      animation: 0.9s ${bounceAnimation2};
    `}
`;

export const NotesForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 2rem;
    padding: 10px 5px;
  }
`;
export const NotesInput = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  input {
    outline: none;
    border: none;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.textColor};
    width: 72%;
    padding: 6px;
    font-family: "Reenie Beanie", cursive;
    font-size: 1.5rem;
  }
`;

export const NotesSubmit = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.primaryColor};
  font-weight: bold;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.textColor};
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
  transition: 0.4s all ease-in-out;
  transform-origin: center;
  transform: ${({ isactive }) => isactive && "rotate(135deg)"};
`;
