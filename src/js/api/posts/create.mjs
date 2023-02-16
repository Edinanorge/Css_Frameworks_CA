import { url } from "../constants.mjs";
import { headers } from "./headers.mjs";

export async function cratePost(postData) {
  const createPostUrl = `${url}/posts`;

  const options = {
    header: headers(),
    body: JSON.stringify(postData),
    method: "post",
  };

  const response = await fetch(createPostUrl, options);
  const post = await response.json();
  console.log(post);
}
