import { url } from "../../api/constants.mjs";
import { fetchWhitToken } from "../posts/headers.mjs";

export async function getProfiles() {
  const getProfilesUrl = `${url}/profiles`;

  const response = await fetchWhitToken(getProfilesUrl);

  if (response.ok) {
    const profiles = await response.json();
    return profiles;
  } else {
    throw new Error(response.statusText);
  }
}

export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a user name");
  }

  const getProfileUrl = `${url}/profiles/${name}`;

  const response = await fetchWhitToken(getProfileUrl);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}
