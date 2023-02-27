import { register } from "../api/auth/register.mjs";
import { displayMessage } from "../helpers/displayMessage.mjs";

export function submitSignupForm() {
  const form = document.querySelector("#signupForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      register(profile);
    });
  }
}
