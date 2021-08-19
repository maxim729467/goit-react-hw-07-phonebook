import styled from "styled-components";

export const Item = styled.li`
  font-size: large;
  font-weight: 500;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  transition: all 250ms ease;
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
  outline: none;
  padding: 3px 6px;
  font-size: 12px;
  margin-left: 20px;
  &:hover,
  &:focus {
    background-color: orangered;
  }
`;
