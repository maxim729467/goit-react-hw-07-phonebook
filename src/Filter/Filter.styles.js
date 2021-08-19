import styled from "styled-components";

export const FilterSection = styled.div`
  width: 500px;
  margin-bottom: 15px;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  line-height: 2;
`;

export const Input = styled.input`
  width: 350px;
  padding: 5px;

  border-color: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
  transition: all 250ms ease;
  outline: none;

  &:hover,
  &:focus {
    border-color: orangered;
  }
`;
