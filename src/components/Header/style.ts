import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;

  color: ${({ theme }) => theme.color.monochromatics.grey8};
  background-color: ${({ theme }) => theme.color.monochromatics.grey1};
`;

export const NavBar = styled.nav`
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    border-bottom: solid 3px #ffffff00;
    padding: 20px;
    transition: color 0.15s ease, border-bottom 0.15s ease;

    :hover,
    :focus,
    :active {
      color: ${({ theme }) => theme.color.greens.green3};
      border-bottom: ${({ theme }) => "3px solid" + theme.color.greens.green4};
    }
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
`;

export const Contact = styled.a`
  color: ${({ theme }) => theme.color.monochromatics.grey8};
  border: 2px solid #ffffff00;
  border-radius: 5px;
  padding: 10px;

  display: flex;
  width: ${({ itemProp }) => itemProp};
  align-items: flex-start;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.color.greens.green3};
    font-size: 1.2rem;
  }

  :hover {
    border: ${({ type, theme }) =>
      !type ? "2px solid" + theme.color.monochromatics.grey7 : ""};
    cursor: ${({ type }) => (type === "text" ? "text" : "pointer")};
  }
`;
