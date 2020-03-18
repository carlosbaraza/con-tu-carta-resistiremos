import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #444;
  color: #ddd;
  padding: ${theme.spacing.l};
  line-height: 1.5;

  a {
    color: white;
    font-weight: bold;
  }

  p {
    margin: 0;
  }

  && > * + * {
    margin-top: ${theme.spacing.m};
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
  }
`;

type Props = {};

export const Footer = (props: Props) => {
  return (
    <Container>
      <p>Este proyecto no tiene ánimo de lucro.</p>

      <p>
        El único fin de este proyecto es hacer sentir un poco mejor a las personas que lo estan
        pasando mal como consecuencia de la pandemia de SARS-CoV-2 de 2020.
      </p>
      <p>
        Todo el código fuente está disponible en{" "}
        <a href="https://github.com/carlosbaraza/con-tu-carta-resistiremos">
          github.com/carlosbaraza/con-tu-carta-resistiremos
        </a>
      </p>
    </Container>
  );
};
