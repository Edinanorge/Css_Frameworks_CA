import { createButton, createElement, createLinkWithImage, createLink, createParagraf } from "./helperFunctions.mjs";

export function postTemplate(postData) {
  const container = createElement("div", ["card", "bg-white", "text-dark", "p-0", "feed", "mb-3"]);
  if (postData.media) {
    const linkWhitImage = createLinkWithImage(
      `/posts/post/${postData.id}`,
      "View post",
      postData.media,
      `Image from ${postData.title}`,
      [],
      ["card-img", "mb-1"]
    );
    container.appendChild(linkWhitImage);
  }

  const card = createElement("div", ["card-body"]);
  container.appendChild(card);

  const title = createParagraf(postData.title, ["card-title", "text-primary", "fw-bolder"]);
  card.appendChild(title);

  const body = createParagraf(postData.body, ["mb-3", "fw-lighter"]);
  card.appendChild(body);

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

  const linkComment = createLink(`posts/post/${postData.id}`, "Commet", "Leave a commet", [
    "btn",
    "text-dark",
    "border",
  ]);
  linkContainer.appendChild(linkComment);

  return container;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
}
