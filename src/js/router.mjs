import * as liseners from "./handlers/index.mjs";
import * as profile from "./api/profiles/index.mjs";
import * as posts from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as storage from "./storage/index.mjs";

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

      async function displayUserPosts() {
        const user = storage.load("user");
        const profilePosts = await profile.getProfilePosts(user.name);
        const container = document.querySelector("#profilePostsContainer");
        templates.renderUserPostTemplates(profilePosts, container);
      }
      displayUserPosts();

      return;

    case "/posts/":
      liseners.submitCreatPostForm();

      async function displayPosts() {
        const feeds = await posts.getPosts();
        console.log(feeds);
        const container = document.querySelector("#postsContainer");
        console.log(feeds);
        templates.renderPostTemplates(feeds, container);
      }
      displayPosts();

      async function displayContacts() {
        const contacts = await profile.getProfiles();
        const container = document.querySelector("#contactsContainer");

        templates.renderUserTemplates(contacts, container);
      }
      displayContacts();

      return;
    case "/post/index.html":
      async function displaySingelPost() {
        const querySring = document.location.search;
        const prams = new URLSearchParams(querySring);
        const id = prams.get("id");

        const singlePost = await posts.getPost(id);
        const container = document.querySelector("#singlePostContainer");

        templates.renderSingelPostTemplate(singlePost, container);
      }
      displaySingelPost();

      return;
    case "/post/edit/index.html":
      liseners.submitEditPostForm();
  }
}
