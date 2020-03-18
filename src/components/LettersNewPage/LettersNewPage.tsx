import React from "react";
import styled from "styled-components";
import { AppFrame } from "../AppFrame/AppFrame";
import { Typography } from "@material-ui/core";
import { LettersNewForm } from "./LettersNewForm";

const Container = styled.div`
  flex: 1;
`;

type Props = {};

export const LettersNewPage = (props: Props) => {
  return (
    <Container>
      <LettersNewForm />
    </Container>
  );
};
