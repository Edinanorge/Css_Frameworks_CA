import { url } from "/src/js/api/constants.mjs";
import * as storage from "../../storage/index.mjs";

export async function login(profile) {
  const loginUrl = `${url}/auth/login`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(profile),
  };

  const response = await fetch(loginUrl, options);

  if (response.ok) {
    const { accessToken, ...user } = await response.json();

    storage.save("token", accessToken);
    storage.save("user", user);
  } else {
    throw new Error(response.statusText);
  }
}
