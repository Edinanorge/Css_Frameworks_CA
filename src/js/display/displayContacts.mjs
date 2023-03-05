import * as profile from "../api/profiles/index.mjs";
import * as templates from "../templates/index.mjs";

export async function displayContacts() {
  const contacts = await profile.getProfiles();
  const container = document.querySelector("#contactsContainer");
  container.innerHTML = "";
  templates.renderUserTemplates(contacts, container);
}
