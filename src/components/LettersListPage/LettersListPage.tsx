import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Letter } from '../Letter/Letter';
import { letterList } from '../../service/letters';
import { CircularProgress } from '@material-ui/core';
import { LetterPublic } from '../../types';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { theme } from '../../theme/theme';
import { useLetters } from '../../utils/hooks/letters';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SadIcon = styled(SentimentVerySatisfiedIcon)`
  font-size: 100px;
  opacity: 0.3;
`;

const NoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${theme.spacing.l};

  > * + * {
    margin-top: ${theme.spacing.m};
  }
`;

type Props = {};

export const LettersListPage = (props: Props) => {
  const { data: letters, loading } = useLetters();

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : letters?.length ? (
        letters.map(letter => <Letter letter={letter} key={letter._id} />)
      ) : (
        <NoItemsContainer>
          <SadIcon />
          <span>¡Estamos revisando las cartas y las publicaremos pronto!</span>
        </NoItemsContainer>
      )}
    </Container>
  );
};
