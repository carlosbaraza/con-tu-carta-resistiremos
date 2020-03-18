import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { theme } from '../../theme/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 50%;
`;
const Title = styled.h1``;

const SmallCaption = styled.p`
  font-size: ${theme.font.size.s0};
`;

type Props = {};

export const ThankYou = (props: Props) => {
  return (
    <Container>
      <Image src="/images/envelope.svg" />
      <Title>¡Muchas gracias!</Title>
      <Typography variant="body1">
        Tu carta va a ser revisada por nuestro personal sanitario
      </Typography>
      <SmallCaption>
        Cuando haya sido aprovada, aparecerá en la página y será impresa en
        muchos hospitales para que llegue a cientos de enfermos.
      </SmallCaption>
    </Container>
  );
};
