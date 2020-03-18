import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${theme.spacing.l};
  padding-top: ${theme.spacing.xl};
  padding-bottom: 120px;
  min-height: 350px;
  justify-content: flex-start;

  @media (min-width: 768px) {
    justify-content: center;
    min-height: 500px;
    padding: ${theme.spacing.xl};
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;
const BackgroundInner = styled.div`
  background: ${theme.color.primary};
  position: absolute;
  width: 200%;
  height: 200%;
  top: -115%;
  left: -50%;
  transform: rotate(-7deg);
`;

const Title = styled.h1`
  font-size: ${theme.font.size.s10};
  max-width: 700px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: ${theme.font.size.s12};
  }
`;
const Subtitle = styled.h2`
  font-size: ${theme.font.size.s6};
  margin-top: ${theme.spacing.l};

  @media (min-width: 768px) {
    font-size: ${theme.font.size.s7};
  }
`;

const Image = styled.img`
  width: 50%;
  max-width: 500px;
  position: absolute;
  z-index: -1;
  transform: rotate(7deg);
  bottom: 0;
  right: 25%;

  @media (min-width: 768px) {
    right: 5%;
  }
`;

type Props = {};

export const Header = (props: Props) => {
  return (
    <Container>
      <Background>
        <BackgroundInner />
      </Background>
      <Title>
        Con tu carta <em>resistiremos</em>
      </Title>
      <Subtitle>Un enfermo de COVID-19 te necesita</Subtitle>
      <Image src="/images/envelope.svg"></Image>
    </Container>
  );
};
