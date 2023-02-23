import { createElement, createLinkWithImage, createParagraf } from "./helperFunctions.mjs";

export function userTemplate(profileData) {
  const container = createLinkWithImage(
    "#",
    "Link to user profile.",
    profileData.avatar,
    "Profile picture",
    ["d-md-flex", "align-items-center", "text-decoration-none", "text-white"],
    ["rounded-circle", "m-1", "border", "border-secondary", "border-2", "user-profile-picture"]
  );
  const paragraf = createParagraf(profileData.name, ["m-0", "ps-md-2", "d-none", "d-lg-block"]);
  container.appendChild(paragraf);

  return container;
}

export function renderUserTemplate(profileData, parent) {
  parent.append(userTemplate(profileData));
}

export function renderUserTemplates(profileDataList, parent) {
  parent.append(...profileDataList.map(userTemplate));
}
