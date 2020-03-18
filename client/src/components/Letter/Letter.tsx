import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUCard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const Card = styled(MUCard)`
  width: 300px;
  flex-basis: 100%;

  & + & {
    margin-top: ${theme.spacing.m};
  }

  @media (min-width: 768px) {
    flex-basis: auto;
    margin: ${theme.spacing.m};
  }
`;

const Title = styled.span`
  font-size: ${theme.font.size.s2};
`;

export function Letter() {
  return (
    <Card>
      <CardContent>
        <Typography component={Title} color="textSecondary" gutterBottom>
          14 Marzo 2020
        </Typography>
        <Typography variant="h5" component="h2">
          Con mucha ilusion
        </Typography>
        <Typography variant="body2" component="p">
          Vamos a salir de esta todos juntos...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Leer carta</Button>
      </CardActions>
    </Card>
  );
}
