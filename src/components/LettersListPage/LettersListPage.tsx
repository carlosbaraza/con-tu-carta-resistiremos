import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Letter } from '../Letter/Letter';
import { letterList } from '../../service/letters';
import { CircularProgress } from '@material-ui/core';
import { LetterPublic } from '../../types';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { theme } from '../../theme/theme';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SadIcon = styled(SentimentVeryDissatisfiedIcon)`
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
  const [loading, setLoading] = useState(true);
  const [letters, setLetters] = useState<LetterPublic[] | null>(null);

  useEffect(() => {
    async function getData() {
      const response = await letterList();
      const data = await response.json();
      setLetters(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : letters?.length ? (
        letters.map(letter => <Letter letter={letter} key={letter._id} />)
      ) : (
        <NoItemsContainer>
          <SadIcon />
          <span>Aun no hemos publicado ninguna carta en la web.</span>
        </NoItemsContainer>
      )}
    </Container>
  );
};
