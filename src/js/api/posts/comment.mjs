import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

export async function commentPost(postData) {
  try {
    if (!postData.id) throw new Error("Comment requires a postId");
    const commentUrl = `${url}/posts/${postData.id}/comment`;

    const options = {
      body: JSON.stringify(postData),
      method: "POST",
    };

    const response = await fetchWhitToken(commentUrl, options);

    if (response.ok) {
      const comment = await response.json();
      return comment;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
}
