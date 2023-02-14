import { url } from "/src/js/api/constants.mjs";

export async function register(profile) {
  const registerUrl = `${url}/auth/register`;

  const method = "post";
  const body = JSON.stringify(profile);
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  };

  const response = await fetch(registerUrl, options);
  const result = await response.json();
  return result;
}
