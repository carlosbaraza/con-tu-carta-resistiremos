import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUCard from "@material-ui/core/Card";
import MUCardActions from "@material-ui/core/CardActions";
import MUCardContent from "@material-ui/core/CardContent";
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

const CardContent = styled(MUCardContent)`
  background-color: #fff;
  background-size: 100px 20px;
  background-image: linear-gradient(90deg, #f3f3f3 0.05em, transparent 0.05em),
    linear-gradient(0deg, #f3f3f3 0.05em, transparent 0.05em);
`;

const CardActions = styled(MUCardActions)`
  border-top: 1px #f3f3f3 solid;
`;

const DateTitle = styled.span`
  font-size: ${theme.font.size.s0};
`;

const Title = styled.h2`
  font-family: "Dancing Script", cursive;
  font-weight: bold;
  font-size: ${theme.font.size.s6};
`;

const Body = styled.p`
  font-family: "Dancing Script", cursive;
  font-size: ${theme.font.size.s2};
`;

export function Letter() {
  return (
    <Card>
      <CardContent>
        <Typography component={DateTitle} color="textSecondary" gutterBottom>
          14 Marzo 2020
        </Typography>
        <Typography variant="h5" component={Title}>
          Con mucha ilusion
        </Typography>
        <Typography variant="body2" component={Body}>
          Vamos a salir de esta todos juntos...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Leer carta</Button>
      </CardActions>
    </Card>
  );
}