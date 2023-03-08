import * as posts from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";
/**
 * This function getting the prost id from the url query strin paramaeter and display the post hwit the same id
 */
export async function displaySingelPost() {
  const querySring = document.location.search;
  const prams = new URLSearchParams(querySring);
  const id = prams.get("id");

  const singlePost = await posts.getPost(id);
  const container = document.querySelector("#singlePostContainer");

  templates.renderSingelPostTemplate(singlePost, container);
}
