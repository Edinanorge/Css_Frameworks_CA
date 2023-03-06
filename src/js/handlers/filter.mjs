import { getFilteredPosts } from "../api/posts/filter.mjs";

import { renderPostTemplates } from "../templates/posts.mjs";

export async function submitFilterForm() {
  const form = document.querySelector("#filterForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      let { sort, sortOrder, tag } = Object.fromEntries(formData.entries());

      tag = tag.toLowerCase().trim();
      const query = [`sort=${sort}`, `sortOrder=${sortOrder}`, `_tag=${tag}`].join("&");

      const container = document.querySelector("#postsContainer");
      container.innerHTML = "";
      const filteredPosts = await getFilteredPosts(query);

      renderPostTemplates(filteredPosts, container);
    });
  }
}
