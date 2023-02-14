import { url } from "/src/js/api/constants.mjs";
import { save } from "../../storage/save.mjs";

export async function login(profile) {
  const loginUrl = `${url}/auth/login`;
  const method = "post";
  const body = JSON.stringify(profile);
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  };

  const response = await fetch(loginUrl, options);
  const result = await response.json();

  // save token to lokal storage
  save("token", result.accessToken);
}
