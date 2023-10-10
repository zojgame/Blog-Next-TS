import { URL_USERS } from ".";

export function getUser(id: Number) {
  const response = fetch(`${URL_USERS}?id=${id}`).then((res) => res.json());
  return response;
}
