import {
  createButton,
  createElement,
  createLinkWithImage,
  createLink,
  createParagraf,
  createImage,
} from "./helperFunctions.mjs";

export function postTemplate(postData) {
  const container = createElement("div", ["card", "p-0", "feed", "mb-3"]);

  const cardHeader = createElement("div", ["d-flex", "flex-row", "align-items-center", "justify-content-between"]);
  container.appendChild(cardHeader);

  const userContainer = createElement("div", ["d-flex", "flex-row", "align-items-center"]);
  cardHeader.appendChild(userContainer);

  const userImg = createElement("div", [
    "rounded-circle",
    "m-2",
    "border",
    "border-secondary",
    "border-2",
    "user-profile-picture",
  ]);

  if (postData.author.avatar) {
    userImg.style.backgroundImage = ` url(${postData.author.avatar}`;
    userImg.style.backgroundSize = "cover";
  }

  userContainer.appendChild(userImg);

  const userName = createParagraf(postData.author.name, ["m-0"]);
  userContainer.appendChild(userName);

  const updatedDate = createElement("div", ["text-muted", "fs-7", "mx-3"]);
  updatedDate.innerText = `Updated: ${postData.updated.substring(0, 10)} `;
  cardHeader.appendChild(updatedDate);

  const card = createElement("div", ["card-body"]);

  container.appendChild(card);

  const title = createParagraf(postData.title, ["card-title", "fs-5", "fw-bolder"]);
  card.appendChild(title);

  const body = createParagraf(postData.body, ["mb-3", "text-muted"]);
  card.appendChild(body);

  if (postData.media) {
    const image = createImage(["card-img", "mb-1"], postData.media, "profile avatar");
    card.appendChild(image);
  }

  const linkContainer = createElement("div", ["d-flex", "justify-content-between", "align-items-center"]);
  card.appendChild(linkContainer);

  const buttonContainer = document.createElement("div");
  linkContainer.appendChild(buttonContainer);

  const buttonHappy = createButton(["btn", "text-warning", "p-2"], "Like");
  buttonContainer.appendChild(buttonHappy);

  const iconHappy = createElement("i", ["bi", "bi-emoji-smile-fill"]);
  buttonHappy.appendChild(iconHappy);

  const buttonNeutral = createButton(["btn", "text-warning", "p-2"], "No comment");
  buttonContainer.appendChild(buttonNeutral);

  const iconNeutral = createElement("i", ["bi", "bi-emoji-neutral-fill"]);
  buttonNeutral.appendChild(iconNeutral);

  const buttonLove = createButton(["btn", "text-warning", "p-2"], "Love");
  buttonContainer.appendChild(buttonLove);

  const iconLove = createElement("i", ["bi", "bi-emoji-heart-eyes-fill"]);
  buttonLove.appendChild(iconLove);

  const buttonFunny = createButton(["btn", "text-warning", "p-2"], "Funny");
  buttonContainer.appendChild(buttonFunny);

  const iconFunny = createElement("i", ["bi", "bi-emoji-laughing-fill"]);
  buttonFunny.appendChild(iconFunny);

  const linkComment = createLink(`/post/index.html?id=${postData.id}`, "Commet", "Leave a commet", ["btn", "border"]);
  linkContainer.appendChild(linkComment);

  return container;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
}
