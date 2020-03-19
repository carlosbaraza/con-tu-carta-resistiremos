import React, { useState, FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SendIcon from '@material-ui/icons/Send';
import { Button, CircularProgress, Collapse } from '@material-ui/core';
import { letterCreate } from '../../service/letters';
import { useHistory } from 'react-router';
import { signIn } from '../../utils/firebase';
import Alert from '@material-ui/lab/Alert';
import { useUser } from '../../utils/hooks/user';

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

const SubmitButton = styled(Button)`
  align-self: flex-start;
`;

export function LoginPage() {
  const user = useUser();
  console.log(user);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState('');

  const cleanErrors = () => {
    setPasswordError('');
    setEmailError('');
    setError('');
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cleanErrors();

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      return setEmailError('El email es obligatorio');
    }
    if (!password) {
      return setPasswordError('La contraseña es obligatoria');
    }

    try {
      setSubmitLoading(true);
      await signIn(email, password);
      window.location.assign('/cartas');
    } catch (e) {
      setSubmitLoading(false);
      setError(e.message || 'La verificación de usuario ha fallado');
    }
  };

  return (
    <Form noValidate autoComplete="off" onSubmit={onSubmit}>
      <Collapse in={!!error}>
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      </Collapse>

      <TextField
        label="Email *"
        variant="outlined"
        value={email}
        onChange={e => {
          setEmail(e.target.value);
          setEmailError('');
        }}
        error={!!emailError}
        helperText={emailError}
        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
      />
      <TextField
        label="Contraseña *"
        variant="outlined"
        type="password"
        value={password}
        onChange={e => {
          setPassword(e.target.value);
          setPasswordError('');
        }}
        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
        error={!!passwordError}
        helperText={passwordError}
      />
      <SubmitButton
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        disabled={submitLoading}
      >
        {submitLoading ? 'Loading' : 'Login'}
      </SubmitButton>
    </Form>
  );
}
