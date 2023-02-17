import { url } from "../../api/constants.mjs";
import { fetchWhitToken } from "../posts/headers.mjs";

export async function getProfilePosts(name) {
  if (!name) {
    throw new Error("Get requires a user name");
  }

  const getProfilePostsUrl = `${url}/profiles/${name}/posts`;

  const response = await fetchWhitToken(getProfilePostsUrl);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}
