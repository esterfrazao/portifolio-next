import styled from "styled-components";

export const Text = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7rem;

  @media (min-width: 700px) {
    text-align: justify;
  }
`;

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
  width: 55%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 50px;

  div:first-child {
    margin-right: 20px;
  }
`;

export const Scroll = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color.greens.green4};
  font-size: 4rem;
  position: absolute;
  bottom: 0;
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
