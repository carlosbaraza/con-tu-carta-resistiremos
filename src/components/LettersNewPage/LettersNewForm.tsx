import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import SendIcon from "@material-ui/icons/Send";
import { Button } from "@material-ui/core";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: ${theme.spacing.m} !important;
  }
`;

const LetterTextField = styled(TextField)`
  background-color: #fff;
  background-size: 100px 20px;
  background-image: linear-gradient(90deg, #f3f3f3 0.05em, transparent 0.05em),
    linear-gradient(0deg, #f3f3f3 0.05em, transparent 0.05em);

  textarea,
  input {
    font-family: "Dancing Script", cursive;
  }
  textarea {
    font-size: 20px;
  }
`;

const SubmitButton = styled(Button)`
  align-self: flex-start;
`;

export function LettersNewForm() {
  return (
    <Form noValidate autoComplete="off">
      <LetterTextField label="Título de tu carta *" variant="outlined" />
      <LetterTextField
        label="Tu carta *"
        multiline
        variant="outlined"
        rows="10"
        rowsMax={Infinity}
      />
      <TextField label="Tu email (opcional)" variant="outlined" />
      <SubmitButton
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        startIcon={<SendIcon />}
      >
        Mandar carta
      </SubmitButton>
    </Form>
  );
}
