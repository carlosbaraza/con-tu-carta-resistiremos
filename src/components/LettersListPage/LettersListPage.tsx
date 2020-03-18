import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Letter } from '../Letter/Letter';
import { letterList } from '../../service/letters';
import { CircularProgress } from '@material-ui/core';
import { LetterPublic } from '../../types';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
      ) : (
        letters?.map(letter => <Letter letter={letter} key={letter._id} />)
      )}
    </Container>
  );
};
