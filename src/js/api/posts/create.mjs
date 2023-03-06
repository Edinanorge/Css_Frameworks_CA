import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

export async function createPost(postData) {
  try {
    const createPostUrl = `${url}/posts`;
    const options = {
      body: JSON.stringify({
        title: postData.title,
        body: postData.body,
        media: postData.media,
        tags: postData.tags.split(","),
      }),
      method: "POST",
    };

    const response = await fetchWhitToken(createPostUrl, options);
    console.log(response);
    if (response.ok) {
      const post = await response.json();
      console.log(post);
      return post;
    } else {
      throw new Error(response.statusText);
    }
  } catch {
    console.log(error);
  }
}
