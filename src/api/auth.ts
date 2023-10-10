import { URL_AUTH } from ".";

const login = (login: string, password: string) => {
  const formData = new FormData();
  formData.append("name", login);
  formData.append("password", password);

  const response = fetch(URL_AUTH, {
    method: "POST",
    body: formData,
  });

  return response;
};

export { login };
