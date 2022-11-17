import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.color.monochromatics.grey1};

  @media (min-width: 700px) {
    text-align: left;
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  min-height: 90vh;
`;

export const Section = styled.section`
  position: relative;
  padding: 4rem 2rem;
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: ${({ theme, datatype }) =>
    datatype === "dark"
      ? theme.color.monochromatics.grey2
      : theme.color.monochromatics.white};
  color: ${({ theme, datatype }) =>
    datatype === "light"
      ? theme.color.monochromatics.grey2
      : theme.color.monochromatics.grey8};
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.monochromatics.black};
  text-align: center;
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;

  @media (min-width: 700px) {
    text-align: left;
  }
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.color.monochromatics.grey7};
  color: ${({ theme }) => theme.color.monochromatics.grey3};
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;

export const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

// .logo {
//   height: 1em;
//   margin-left: 0.5rem;
// }

// @media (max-width: 600px) {
//   .grid {
//     width: 100%;
//     flex-direction: column;
//   }
// }

// @media (prefers-color-scheme: dark) {
//   .card,
//   .footer {
//     border-color: #222;
//   }
//   .code {
//     background: #111;
//   }
//   .logo img {
//     filter: invert(1);
//   }
// }
