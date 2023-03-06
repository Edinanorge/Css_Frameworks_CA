import * as storage from "../storage/index.mjs";

export function setAvatar() {
  const user = storage.load("user");
  if (!user) {
    window.location.replace("/profile/login/");
  } else {
    document.querySelectorAll(".avatar").forEach((element) => (element.src = user.avatar));
  }
}
