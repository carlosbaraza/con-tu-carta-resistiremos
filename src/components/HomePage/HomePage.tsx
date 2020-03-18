import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from '@material-ui/core';
import { theme } from '../../theme/theme';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${theme.spacing.xl};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${theme.spacing.l};
  padding-right: ${theme.spacing.l};
  align-items: center;
  max-width: 1000px;
  align-self: center;
  line-height: 1.5;

  > * + * {
    margin-top: ${theme.spacing.l} !important;
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
    flex-direction: column;
  }
`;

const SectionRow = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    flex-basis: auto;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    > * {
      flex-basis: 50%;
      padding: ${theme.spacing.m};
    }
  }
`;

const CTA = styled(Button)`
  padding: ${theme.spacing.m} !important;
  padding-left: ${theme.spacing.l} !important;
  padding-right: ${theme.spacing.l} !important;
  font-size: ${theme.font.size.s4} !important;
  font-weight: bold !important;
` as any;

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  > * + * {
    margin-left: ${theme.spacing.m} !important;
  }
`;

const Card = styled.div``;

const CardTitle = styled.h3`
  font-size: ${theme.font.size.s7};
  margin: 0;
`;

const TemporaryBanner = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${theme.spacing.xl};
  width: 100%;

  h3 {
    font-size: 30px;
    font-weight: normal;
  }

  a {
    color: ${theme.color.secondary};
    text-decoration: none;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    a {
      font-size: 30px;
    }
  }

  > * {
    margin: 0;
    word-wrap: break-word;
  }

  > * + * {
    margin-top: ${theme.spacing.l};
  }
`;

type Props = {};

export const HomePage = (props: Props) => {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <Section>
          <CTA
            color="secondary"
            variant="contained"
            component={Link}
            to="/cartas/new"
          >
            <ButtonContent>
              <CreateIcon />
              <span>Escribe tu carta</span>
            </ButtonContent>
          </CTA>
          <CTA
            color="default"
            variant="contained"
            component={Link}
            to="/cartas"
          >
            <ButtonContent>Otras cartas anónimas</ButtonContent>
          </CTA>
          <SectionRow>
            <Card>
              <CardTitle>Solos pero acompañados</CardTitle>
              <p>
                Muchos enfermos de COVID-19 estan aislados en hospitales para
                evitar el contagio, sin contacto con sus familiares o amigos.
                Solo reciben una visita al día de un sanitario. Una carta
                anónima puede ayudarles a luchar.
              </p>
            </Card>
            <Card>
              <CardTitle>Juntos resistiremos</CardTitle>
              <p>
                Una carta anónima puede darle la fuerza a una de estas personas
                para seguir luchando contra este dichoso virus.
              </p>
            </Card>
          </SectionRow>
        </Section>
        <Section>
          <SectionRow>
            <Card>
              <CardTitle>3000+ cartas anónimas</CardTitle>
              <p>
                Mucha gente ya ha enviado sus cartas, haciendo llegar un pequeño
                aliento de esperanza a cientos de enfermos.
              </p>
            </Card>
            <Card>
              <CardTitle>Mucho personal sanitario comprometido</CardTitle>
              <p>
                Estas cartas están siendo revisadas por much@s médicos,
                enfermer@s y auxiliares.
              </p>
              <p>
                Nuestro personal sanitario se compromete a imprimir muchas
                cartas para hacerlas llegar a enfermos que no tienen teléfono
                movil.
              </p>
            </Card>
          </SectionRow>
          <CTA
            color="default"
            variant="contained"
            component={Link}
            to="/cartas"
          >
            <ButtonContent>Otras cartas anónimas</ButtonContent>
          </CTA>
          <CTA
            color="secondary"
            variant="contained"
            component={Link}
            to="/cartas/new"
          >
            <ButtonContent>
              <CreateIcon />
              <span>Escribe tu carta</span>
            </ButtonContent>
          </CTA>
        </Section>
      </InnerContainer>

      <Footer />
    </Container>
  );
};
