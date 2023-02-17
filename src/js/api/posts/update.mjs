import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Upate requires a postId");
  }

  const updatePostUrl = `${url}/posts/${postData.id}`;
  const options = {
    body: JSON.stringify(postData),
    method: "put",
  };

  const response = await fetchWhitToken(updatePostUrl, options);

  if (response.ok) {
    const post = await response.json();
    console.log(post);
    return post;
  } else {
    throw new Error(response.statusText);
  }
}
