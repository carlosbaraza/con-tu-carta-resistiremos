import { API_URL } from "./../config/config";
type Letter = {
  title: string;
  body: string;
  email?: string;
};

export async function letterCreate(letter: Letter) {
  return fetch(`${API_URL}/letters`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(letter)
  });
}
