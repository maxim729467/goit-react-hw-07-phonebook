import styled from "styled-components";

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  padding: 25px 15px;

  width: 500px;

  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;

  align-items: flex-start;
  justify-content: center;
`;

export const Input = styled.input`
  transition: all 250ms ease;
  border: 2px solid black;
  border-radius: 2px;
  outline: none;
  margin-left: 15px;

  width: 450px;

  padding: 5px;

  &:hover,
  &:focus {
    border-color: orangered;
  }
`;

export const Label = styled.label`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  transition: all 250ms ease;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
  outline: none;

  padding: 5px 15px;
  font-size: 16px;

  &:hover,
  &:focus {
    background-color: orangered;
  }
`;
