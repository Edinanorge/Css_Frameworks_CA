import { url } from "/src/js/api/constants.mjs";

export async function register(profile) {
  const registerUrl = `${url}/auth/register`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(profile),
  };

  const response = await fetch(registerUrl, options);

  if (response.ok) {
    return await response.json();
  } else {
    alert("User already registerd");
    throw new Error(response.status);
  }
}
