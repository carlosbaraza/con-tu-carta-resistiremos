import React from "react";
import styled from "styled-components";
import { Letter } from "../Letter/Letter";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

type Props = {};

export const LettersListPage = (props: Props) => {
  return (
    <Container>
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
    </Container>
  );
};
