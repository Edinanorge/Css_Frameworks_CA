import { submitSignupForm } from "./handlers/register.mjs";
import { submitLoginForm } from "./handlers/login.mjs";

const path = location.pathname;
console.log(path);

if (path === "/profile/login/") {
  submitLoginForm();
} else if (path === "/profile/register/") {
  submitSignupForm();
}
