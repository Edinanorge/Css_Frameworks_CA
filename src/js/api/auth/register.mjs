import { url } from "/src/js/api/constants.mjs";
import { displayMessage } from "../../helpers/displayMessage.mjs";

export async function register(profile) {
  const registerUrl = `${url}/auth/register`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const response = await fetch(registerUrl, options);

  if (response.ok) {
    displayMessage("registerFeedback", "User registered. Please log in!", "success");
    form.reset();
    return await response.json();
  } else {
    displayMessage("registerFeedback", "User already registered!", "danger");
    throw new Error(response.status);
  }
}
