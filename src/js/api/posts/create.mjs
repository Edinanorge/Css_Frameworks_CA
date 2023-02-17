import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

export async function createPost(postData) {
  const createPostUrl = `${url}/posts`;
  const options = {
    body: JSON.stringify(postData),
    method: "post",
  };

  const response = await fetchWhitToken(createPostUrl, options);

  if (response.ok) {
    const post = await response.json();
    console.log(post);
    return post;
  } else {
    throw new Error(response.statusText);
  }
}
