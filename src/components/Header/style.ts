import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: flex-end;

  color: ${({ theme }) => theme.color.monochromatics.grey8};
  background-color: ${({ theme }) => theme.color.monochromatics.grey1};

  @media (min-width: 700px) {
    justify-content: space-around;
  }
`;

export const NavBar = styled.nav`
  width: 30%;
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

  @media (max-width: 700px) {
    display: none;
  }
`;

export const DropDownNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 2.2rem;
    cursor: pointer;
  }

  div {
    position: absolute;
    left: 0;
    top: 10vh;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    height: 40vh;
    width: 100%;

    padding: 0 15px;
    background: ${({ theme }) => theme.color.monochromatics.white};
    color: ${({ theme }) => theme.color.blues.dark1};
    box-shadow: 0px 34px 70px 15px #4242421f;

    font-size: 1.3rem;

    a {
      border-left: solid 3px #ffffff00;
      padding: 20px;
      transition: color 0.15s ease, border-bottom 0.15s ease;

      :hover,
      :focus,
      :active {
        color: ${({ theme }) => theme.color.blues.dark2};
        border-left: ${({ theme }) => "3px solid" + theme.color.blues.dark2};
      }
    }
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  width: 30%;
  min-width: 300px;
  justify-content: space-between;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Contact = styled.a`
  color: ${({ theme }) => theme.color.monochromatics.grey8};
  border: 2px solid #ffffff00;
  border-radius: 5px;
  padding: 2px;

  display: flex;
  flex-direction: row;
  width: ${({ itemProp }) => itemProp};
  align-items: center;
  transition: border-color 0.25 ease;

  span {
    color: ${({ theme }) => theme.color.greens.green3};
    font-size: 1.2rem;
    margin-right: 10px;
  }

  :hover {
    border: ${({ type, theme }) =>
      !type ? "2px solid" + theme.color.monochromatics.grey7 : ""};
    cursor: ${({ type }) => (type === "text" ? "text" : "pointer")};
  }
`;
