import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ color, theme }) =>
    color === "green" ? theme.color.greens.green2 : "#ffffff00"};

  span {
    margin-right: 20px;
    color: ${({ color, theme }) =>
      color === "green"
        ? theme.color.monochromatics.white
        : theme.color.greens.green2};
  }

  p {
    color: ${({ theme }) => theme.color.monochromatics.white};
  }

  :hover {
    cursor: pointer;
    background-color: ${({ color, theme }) =>
      color === "green"
        ? theme.color.greens.green1
        : color === "black"
        ? theme.color.monochromatics.grey1
        : theme.color.monochromatics.grey8};
  }
`;
