import * as post from "../api/posts/index.mjs";

export function submitDeletePostForm() {
  const form = document.querySelector("#deletePostForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      post.deletePost(post);
    });
  }
}
