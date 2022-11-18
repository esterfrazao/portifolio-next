import styled from "styled-components";

// GERAIS
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
  padding: 25px 40px;

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

// HOME PAGE
export const Tag = styled.span`
  background-color: ${({ theme }) => theme.color.monochromatics.grey7};
  color: ${({ theme }) => theme.color.monochromatics.grey3};
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
`;

export const CustomizedTitle = styled(Title)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  b {
    font-weight: 900;
    font-size: 3rem;
    color: ${({ theme }) => theme.color.monochromatics.black};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.monochromatics.black};
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;

  @media (min-width: 700px) {
    text-align: left;
  }
`;

export const ProjectsSection = styled(Section)`
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.5rem;
  }
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

// Projects Page
export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
  margin-bottom: 70px;
`;

export const Project = styled.div`
  width: 45%;
  height: 200px;
  box-sizing: border-box;

  padding: 15px;
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  border: ${({ theme }) => "2px dotted" + theme.color.blues.dark4};
  border-radius: 5px;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.greens.green4};
    margin: 0;
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
