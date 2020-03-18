import React from 'react';
import styled from 'styled-components';
import { AppFrame } from '../AppFrame/AppFrame';
import { Typography } from '@material-ui/core';
import { LettersNewForm } from './LettersNewForm';
import { ThankYou } from './ThankYou';

const Container = styled.div`
  flex: 1;
`;

type Props = {};

export const LettersNewPage = (props: Props) => {
  const isSubmittedAlready = document.cookie.includes('letter_submitted=true');

  return (
    <Container>
      {isSubmittedAlready ? <ThankYou /> : <LettersNewForm />}
    </Container>
  );
};
