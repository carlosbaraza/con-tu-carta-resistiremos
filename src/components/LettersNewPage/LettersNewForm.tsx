import React, { useState, FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SendIcon from '@material-ui/icons/Send';
import { Button, CircularProgress } from '@material-ui/core';
import { letterCreate } from '../../service/letters';
import { useHistory } from 'react-router';
import Indications from './Indications';

type JoiError = {
  message: string;
  path: string[];
  type: string;
  context: { key: string; label: string; value: string };
};

const Form = styled.form`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: ${theme.spacing.m} !important;
  }
`;

const LetterTextField = styled(TextField)`
  .MuiInputBase-root {
    background-color: #fff;
    background-size: 100px 20px;
    background-image: linear-gradient(90deg, #f3f3f3 0.05em, transparent 0.05em),
      linear-gradient(0deg, #f3f3f3 0.05em, transparent 0.05em);
  }

  textarea,
  input {
    font-family: 'Indie Flower', cursive;
  }
  textarea {
    font-size: 20px;
  }
`;

const SubmitButton = styled(Button)`
  align-self: flex-start;
`;

export function LettersNewForm() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [body, setBody] = useState('');
  const [bodyError, setBodyError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  const cleanErrors = () => {
    setBodyError('');
    setTitleError('');
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    cleanErrors();

    // Validations
    const titleClean = title.trim();
    const bodyClean = body.trim();
    const emailClean = email.trim();
    if (!titleClean) {
      return setTitleError('Toda carta necesita un título');
    }
    if (!bodyClean) {
      return setBodyError('Olvidaste completar la carta!');
    }

    // Submit
    setSubmitLoading(true);
    const letter = {
      title: titleClean,
      body: bodyClean,
      email: emailClean || undefined
    };

    const response = await letterCreate(letter);
    if (response.ok) {
      document.cookie = 'letter_submitted=true';
      // Reload page so that the cookie is picked by route page component
      window.location.reload();
    }

    if (response.status === 400) {
      const { error } = await response.json();
      error.details.forEach((error: JoiError) => {
        switch (error.context.key) {
          case 'title':
            return setTitleError(error.message);
          case 'body':
            return setBodyError(error.message);
        }
      });
      setSubmitLoading(false);
    }
  };

  return (
    <Form noValidate autoComplete="off" onSubmit={onSubmit}>
      <Indications />
      <LetterTextField
        label="Título de tu carta *"
        variant="outlined"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
          setTitleError('');
        }}
        error={!!titleError}
        helperText={titleError}
        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
      />
      <LetterTextField
        label="Tu carta *"
        multiline
        variant="outlined"
        rows="10"
        rowsMax={Infinity}
        value={body}
        onChange={e => {
          setBody(e.target.value);
          setBodyError('');
        }}
        error={!!bodyError}
        helperText={bodyError}
      />
      <TextField
        label="Tu email (opcional)"
        variant="outlined"
        value={email}
        onChange={e => {
          setEmail(e.target.value);
          setEmailError('');
        }}
        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
        error={!!emailError}
        helperText={emailError}
      />
      <SubmitButton
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        startIcon={
          submitLoading ? (
            <CircularProgress color="secondary" size="20px" />
          ) : (
            <SendIcon />
          )
        }
        disabled={submitLoading}
      >
        {submitLoading ? 'Mandando carta' : 'Mandar carta'}
      </SubmitButton>
    </Form>
  );
}
