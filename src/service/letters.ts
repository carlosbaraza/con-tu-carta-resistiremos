import { API_URL } from '../utils/config';
import { LetterPost, LetterPublic } from '../types';
import { getIdToken } from '../utils/firebase';

export async function letterCreate(letter: LetterPost) {
  return fetch(`${API_URL}/letters`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(letter)
  });
}

export async function letterSetApproved(id: string, approved: boolean) {
  return fetch(`${API_URL}/letters/${id}/set-approved`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${await getIdToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ approved })
  });
}

export async function letterList() {
  return fetch(`${API_URL}/letters`);
}

export async function letterListAll() {
  return fetch(`${API_URL}/letters/all`, {
    headers: {
      Authorization: `Bearer ${await getIdToken()}`
    }
  });
}
