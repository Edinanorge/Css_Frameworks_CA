import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

export async function getPosts() {
  const getPostsUrl = `${url}/posts`;

  const response = await fetchWhitToken(getPostsUrl);

  if (response.ok) {
    const post = await response.json();
    return post;
  } else {
    throw new Error(response.statusText);
  }
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postId");
  }

  const getPostsUrl = `${url}/posts/${id}`;

  const response = await fetchWhitToken(getPostsUrl);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}
