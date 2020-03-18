import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

const Container = styled.div`
  width: 100%;
  padding-bottom: ${theme.spacing.m};
`;
const Heading = styled.h3`
  width: 100%;
  font-weight: bold;
  margin-top: 0;
`;

const ExpansionTitle = styled.span`
  font-size: 16px;
`;

export default function Indications() {
  return (
    <Container>
      <Heading>
        Antes de nada, nos gustaría recordarte como escribir una carta a un
        enfermo.
      </Heading>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ExpansionTitle>Presentate</ExpansionTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Presentate. Escribe unas breves lineas dandole algun dato sobre ti y
            tu situacion actual. Cuentale como estas viviendo esta situacion
            desde casa. Enfoca la carta en el presente.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ExpansionTitle>No hables del futuro</ExpansionTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Evita hablar del futuro, es decir, no utilices frases como "te
            pondras bien, todo acabara pronto, cuando salgas..." Hay que tener
            presente que no todos se recuperan.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ExpansionTitle>Envia animo</ExpansionTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Envia animo y mensajes que hagan sentir valiosa a la persona.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ExpansionTitle>Ponte en su piel</ExpansionTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Estos pacientes pasan mucho tiempo sólos y pueden sentirse tristes.
            Puedes añadir una frase en tu carta reconociéndo cualquier
            sentimiento desagradable que pueda tener, apoyandole y ayudandole a
            aceptarlos.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ExpansionTitle>Acepta cualquier respuesta</ExpansionTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Plantea con libertad la posibilidad de que conteste o no a tu carta.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Container>
  );
}
