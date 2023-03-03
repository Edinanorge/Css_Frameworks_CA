import * as liseners from "./handlers/index.mjs";
import * as ui from "./display/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
      liseners.submitLoginForm();
      return;

    case "/profile/register/":
      liseners.submitSignupForm();
      return;

    case "/profile/":
      liseners.submitCreatPostForm();
      liseners.submitEditProfileForm();

      ui.displayUserPosts();
      return;

    case "/posts/":
      ui.displayPosts();
      ui.displayContacts();

      liseners.submitCreatPostForm();
      return;

    case "/post/index.html":
      ui.displaySingelPost();
      return;
    case "/post/edit/index.html":
      liseners.submitEditPostForm();
  }
}
