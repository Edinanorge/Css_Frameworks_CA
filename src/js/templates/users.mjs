import { createElement, createLinkWithImage, createParagraf } from "./helperFunctions.mjs";

export function userTemplate(profileData) {
  if (!profileData.avatar) profileData.avatar = "https://picsum.photos/200/300?grayscale";

  const container = createElement("div", [
    "text-white",
    "text-decoration-none",
    "d-flex",
    "flex-column",
    "flex-md-row",
    "align-items-center",
  ]);

  const img = createLinkWithImage(
    "#",
    "Link to user profile.",
    profileData.avatar,
    "Profile picture",
    [, "d-block"],
    ["rounded-circle", "m-1", "border", "border-secondary", "border-2", "user-profile-picture"]
  );

  container.appendChild(img);

  const paragraf = createParagraf(profileData.name, ["m-0", "ps-md-2"]);
  container.appendChild(paragraf);

  return container;
}

export function renderUserTemplate(profileData, parent) {
  parent.append(userTemplate(profileData));
}

export function renderUserTemplates(profileDataList, parent) {
  parent.append(...profileDataList.map(userTemplate));
}
