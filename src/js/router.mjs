import * as liseners from "./handlers/index.mjs";
import * as profile from "./api/profiles/index.mjs";
import * as templates from "./templates/index.mjs";

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
      async function profilePostsTemplate() {
        const profilePosts = await profile.getProfilePosts("edina1");
        const container = document.querySelector("#profilePostsContainer");

        templates.renderUserPostTemplates(profilePosts, container);
      }
      profilePostsTemplate();

      async function contactsTemplate() {
        const contacts = await profile.getProfiles();
        const container = document.querySelector("#contactsContainer");

        templates.renderUserTemplates(contacts, container);
      }
      contactsTemplate();
      return;
    case "/post/create":
      return;
    case "/post/edit":
      liseners.submitEditPostForm();
      return;
    case "/profile/edit":
      liseners.submitEditProfileForm();
      return;
  }
}
