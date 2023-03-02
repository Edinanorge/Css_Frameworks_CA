import { displayMessage } from "../../helpers/displayMessage.mjs";
import { url } from "../constants.mjs";
import { fetchWhitToken } from "../posts/headers.mjs";
import { save } from "../../storage/index.mjs";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileUrl = `${url}/profiles/${profileData.name}/media`;
  const options = {
    body: JSON.stringify(profileData),
    method: "put",
  };

  const response = await fetchWhitToken(updateProfileUrl, options);

  if (response.ok) {
    const profile = await response.json();

    return profile;
  } else {
    throw new Error(response.statusText);
  }
}
