import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUCard from '@material-ui/core/Card';
import MUCardActions from '@material-ui/core/CardActions';
import MUCardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { LetterPublic } from '../../types';
import { Switch, FormControlLabel, CircularProgress } from '@material-ui/core';
import { useIsAdmin } from '../../utils/hooks/user';
import { letterSetApproved } from '../../service/letters';

const Card = styled(MUCard)`
  width: 100%;
  flex-basis: 100%;

  & + & {
    margin-top: ${theme.spacing.m} !important;
  }

  @media (min-width: 768px) {
    margin: ${theme.spacing.m};
  }
`;

const CardContent = styled(MUCardContent)`
  background-color: #fff;
  background-size: 100px 20px;
  background-image: linear-gradient(90deg, #f3f3f3 0.05em, transparent 0.05em),
    linear-gradient(0deg, #f3f3f3 0.05em, transparent 0.05em);

  > * + * {
    margin-top: ${theme.spacing.s} !important;
  }
`;

const CardActions = styled(MUCardActions)`
  border-top: 1px #f3f3f3 solid;
`;

const DateTitle = styled.span`
  font-size: ${theme.font.size.s0};
`;

const Title = styled.h2`
  font-family: 'Indie Flower', cursive !important;
  font-weight: bold !important;
  font-size: ${theme.font.size.s6} !important;
`;

const Body = styled.p`
  font-family: 'Indie Flower', cursive !important;
  font-size: ${theme.font.size.s4} !important;
  white-space: pre-wrap !important;
  line-height: 1.5 !important;

  @media (min-width: 768px) {
    font-size: ${theme.font.size.s4} !important;
  }
`;

type Props = {
  letter: LetterPublic;
};

export function Letter(props: Props) {
  const { letter } = props;
  const isAdmin = useIsAdmin();
  const [isApproved, setIsApproved] = useState(props.letter.approved);
  const [isApprovedLoading, setIsApprovedLoading] = useState(false);
  const date = new Date(props.letter.createdAt);
  let dateString;
  try {
    dateString = date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (e) {
    dateString = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
  }

  const toggleApproved = async () => {
    setIsApproved(!isApproved);
    setIsApprovedLoading(true);
    const response = await letterSetApproved(letter._id, !isApproved);
    setIsApprovedLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography component={DateTitle} color="textSecondary" gutterBottom>
          {dateString}
        </Typography>
        <Typography variant="h5" component={Title}>
          {props.letter.title}
        </Typography>
        <Typography variant="body2" component={Body}>
          {props.letter.body}
        </Typography>
      </CardContent>
      {isAdmin && (
        <CardActions>
          <FormControlLabel
            control={
              <Switch
                checked={isApproved}
                onChange={toggleApproved}
                name="checkedA"
                disabled={isApprovedLoading}
              />
            }
            label={
              isApprovedLoading ? <CircularProgress size="24px" /> : 'Aprobada'
            }
          />
        </CardActions>
      )}
    </Card>
  );
}
