import { getPosts } from "../api/posts/read.mjs";
import { renderPostTemplates } from "../templates/posts.mjs";

export async function search() {
  const posts = await getPosts();

  const form = document.querySelector("#searchForm");
  const formInput = document.querySelector("#searchInput");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchValue = formInput.value.trim();

      const filteredSearch = posts.filter((post) => {
        if (!post.title || !post.body || !post.author.name) {
          return false;
        }
        return (
          post.title.toLowerCase().includes(searchValue) ||
          post.body.toLowerCase().includes(searchValue) ||
          post.author.name.toLowerCase().includes(searchValue)
        );
      });
      console.log(filteredSearch);
      const container = document.querySelector("#postsContainer");
      container.innerHTML = "";
      renderPostTemplates(filteredSearch, container);
    });
  }
}
