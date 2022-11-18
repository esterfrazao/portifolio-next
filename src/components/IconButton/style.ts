import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;
  width: fit-content;
  background-color: ${({ color, theme }) =>
    color === "green" ? theme.color.greens.green4 : "#ffffff00"};

  font-weight: 600;
  font-size: 1.2rem;

  span {
    margin-right: 20px;
    font-size: 1.6rem;
    color: ${({ color, theme }) =>
      color === "green"
        ? theme.color.monochromatics.white
        : theme.color.greens.green4};
  }

  p {
    color: ${({ color, theme }) =>
      color === "white"
        ? theme.color.monochromatics.grey3
        : theme.color.monochromatics.white};
  }

  :hover {
    cursor: pointer;
    background-color: ${({ color, theme }) =>
      color === "green"
        ? theme.color.greens.green3
        : color === "black"
        ? theme.color.monochromatics.grey1
        : theme.color.monochromatics.grey8};
  }
`;
