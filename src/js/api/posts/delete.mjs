import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postId");
  }

  const removePostUrl = `${url}/posts/${id}`;
  const options = {
    method: "DELETE",
  };

  const response = await fetchWhitToken(removePostUrl, options);

  if (response.ok) {
    const post = await response.json();
    console.log(post);
    return post;
  } else {
    throw new Error(response.statusText);
  }
}
