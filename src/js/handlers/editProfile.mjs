import { updateProfile, getProfile } from "../api/profiles/index.mjs";
import * as storage from "../storage/index.mjs";
import { displayMessage } from "../helpers/displayMessage.mjs";

export async function submitEditProfileForm() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const user = storage.load("user");
    document.querySelector(".name").innerText = user.name;
    document.querySelector(".email").innerText = user.email;
    document.querySelectorAll(".avatar").forEach((element) => (element.src = user.avatar));

    const profile = await getProfile(user.name);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = user.name;
      profile.email = user.email;
      user.avatar = profile.avatar;

      document.querySelectorAll(".avatar").forEach((element) => (element.src = profile.avatar));
      updateProfile(profile);

      storage.save("user", profile);
    });
  } else {
    displayMessage("updateMessage", "Something went wrog.", "error");
    throw new Error("Form not found.");
  }
}
