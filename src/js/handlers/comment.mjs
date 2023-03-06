import { commentPost } from "../api/posts/comment.mjs";

export function submitCommentForm() {
  const form = document.querySelector("#commentForm");

  if (form) {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const comment = Object.fromEntries(formData.entries());
      console.log(comment);

      comment.id = id;
      commentPost(comment);

      setTimeout(() => {
        location.reload();
      }, 200);
    });
  }
}
