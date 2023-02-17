import { submitSignupForm } from "./handlers/register.mjs";
import { submitLoginForm } from "./handlers/login.mjs";
import * as postMethodes from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import { getProfiles, getProfile } from "./api/profiles/get.mjs";
import { createPost, getPost } from "./api/posts/index.mjs";
import { getProfilePosts } from "./api/profiles/posts.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  submitLoginForm();
} else if (path === "/profile/register/") {
  submitSignupForm();
}

getProfiles().then(console.log);
getProfile("edina1").then(console.log);

// postMethodes.updatePost({
//   id: 3095,
//   title: " update Building a Better Web  ",
//   body: " update A case study of changes the YouTube Web team made to improve performance, increase their Core Web Vitals pass rates and lift key business metrics.",
// });
// getProfilePosts("edina1").then(console.log);
// async function testUser() {
//   const users = await getPosts();
//   const container = document.querySelector("#test");

//   templates.renderPostTemplates(users, container);
// }
// testUser();

// async function testpost() {
//   const users = await postMethodes.getPosts();
//   const user = users.pop();
//   const container = document.querySelector("#test");

//   templates.renderPostTemplate(user, container);
// }
// testpost();
