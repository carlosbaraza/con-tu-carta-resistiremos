import { API_URL } from './../config/config';
import { LetterPost } from '../types';

export async function letterCreate(letter: LetterPost) {
  return fetch(`${API_URL}/letters`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(letter)
  });
}

export async function letterList() {
  return fetch(`${API_URL}/letters`);
}
