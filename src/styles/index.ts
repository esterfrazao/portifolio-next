import Image from "next/image";
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

export const Scroll = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color.greens.green4};
  font-size: 4rem;
  position: absolute;
  bottom: 0;
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

export const Text = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7rem;

  @media (min-width: 700px) {
    text-align: justify;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 50px;

  div:first-child {
    margin-right: 20px;
  }
`;

export const Figure = styled(Image)`
  min-width: ${(props) => props.width + "px"};
  min-height: ${(props) => props.height + "px"};
  border-radius: 15px;
  width: 50%;
  height: auto;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Badge = styled(Image)`
  max-width: ${(props) => props.width + "px"};
  max-height: ${(props) => props.height + "px"};
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
  align-items: center;
  b {
    font-weight: 900;
    font-size: 3rem;
    color: ${({ theme }) => theme.color.monochromatics.black};
  }

  @media (min-width: 700px) {
    align-items: flex-start;
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

export const AboutSection = styled(Section)`
  flex-direction: column;

  h2 {
    font-size: 2rem;
  }

  .description {
    width: 70%;
    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
      text-align: justify;
    }
  }
`;

// About Page
export const BagdesContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.monochromatics.grey1};

  img:not(:last-child) {
    margin-right: 20px;
  }
`;

export const PresentationContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    width: 55%;
    align-items: flex-start;
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  img {
    border-radius: 5px;
  }

  .experience-box {
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 25px;

    div {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        text-align: justify;
      }
    }

    .vertical-line {
      width: 5px;
      border-left: ${({ theme }) => "3px dotted" + theme.color.greens.green2};
    }
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
