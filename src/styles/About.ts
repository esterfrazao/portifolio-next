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

  :not(:last-child) {
    margin-right: 10%;
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
