import * as posts from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";

export async function displayPosts() {
  const feeds = await posts.getPosts();
  const container = document.querySelector("#postsContainer");
  container.innerHTML = "";
  templates.renderPostTemplates(feeds, container);
}
