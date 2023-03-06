import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postId");
  }

  const updatePostUrl = `${url}/posts/${postData.id}`;
  const options = {
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      media: postData.media,
      tags: postData.tags.split(" "),
    }),
    method: "put",
  };

  const response = await fetchWhitToken(updatePostUrl, options);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}
