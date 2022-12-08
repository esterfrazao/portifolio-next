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

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Section = styled.section`
  position: relative;
  padding: 4rem 2rem;
  min-height: 80vh;
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
  margin-top: 20px;
  flex-wrap: wrap;

  div:first-child {
    margin-right: 20px;
  }

  @media (max-width: 700px) {
    width: 80%;
    justify-content: center;
  }
`;

export const Figure = styled(Image)`
  max-width: 500px;
  max-height: 80vh;
  border-radius: 15px;
  width: 45%;
  margin: 0 15px;

  @media (max-width: 700px) {
    max-width: 300px;
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
  padding: 0;
  padding-bottom: 2rem;

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

    @media (max-width: 700px) {
      width: 100%;
      align-items: center;
      p {
        text-align: center;
      }
    }
  }

  @media (max-width: 700px) {
    align-items: center;
    text-align: center;
  }
`;

// About Page
export const BagdesContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.color.monochromatics.grey1};
  overflow-x: auto;
  overflow-y: clip;

  img:not(:last-child) {
    margin-right: 2%;
  }

  @media (min-width: 700px) {
    justify-content: center;
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
      align-items: flex-start;

      p {
        text-align: justify;
      }
    }

    .vertical-line {
      width: 5px;
      border-left: ${({ theme }) => "3px dotted" + theme.color.greens.green2};

      @media (max-width: 700px) {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    .experience-box {
      flex-direction: column;
      align-items: center;
      width: 100%;
      text-align: center;

      div {
        width: 80%;
        align-items: center;
      }
    }

    .horizontal-line {
      width: 100%;
      height: 5px;
      border-bottom: ${({ theme }) => "3px dotted" + theme.color.greens.green2};
    }
  }
`;

export const ProfilePicture = styled(Figure)`
  max-width: 400px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px 0 0;
  width: 85%;

  border: ${({ theme }) => "3px dotted" + theme.color.blues.dark3};
  border-radius: 5px;
  padding: 15px;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.greens.green4};
    margin: 0;
  }

  @media (min-width: 700px) {
    width: 40%;
    min-height: 250px;
    max-width: 500px;
    margin: 20px;
  }
`;
