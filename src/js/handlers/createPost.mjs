import { createPost } from "../api/posts/create.mjs";

export function submitCreatPostForm() {
  const form = document.querySelector("#createPostForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      createPost(post);

      setTimeout(() => {
        location.reload();
      }, 200);
    });
  }
}
