import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

export async function getPosts() {
  try {
    const getPostsUrl = `${url}/posts?_author=true&_comments=true&_reactions=true`;

    const response = await fetchWhitToken(getPostsUrl);

    if (response.ok) {
      const post = await response.json();
      return post;
    } else {
      console.log(response);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(id) {
  try {
    if (!id) {
      throw new Error("Get requires a postId");
    }

    const getPostsUrl = `${url}/posts/${id}?_author=true&_comments=true&_reactions=true`;

    const response = await fetchWhitToken(getPostsUrl);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
}
