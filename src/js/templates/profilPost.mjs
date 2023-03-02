import {
  createButtonWhitTextContent,
  createParagraf,
  createElement,
  createImage,
  createLink,
  createLinkWithImage,
  createButton,
} from "./helperFunctions.mjs";

import { removePost } from "../api/posts/delete.mjs";

export function userPostTemplate(postData) {
  if (!postData.media) postData.media = "https://picsum.photos/id/151/4288/3216";

  const container = createElement("div", ["card", "feed", "p-0", "mb-4"]);

  const buttonContainer = createElement("div", ["d-flex", "justify-content-around", "align-self-end", "p-3"]);
  container.appendChild(buttonContainer);

  const card = createElement("div", ["card-body", "d-flex", "justify-content-between"]);
  container.appendChild(card);

  const deleteBtn = createButtonWhitTextContent(["btn", "border", "me-1"], "Delete");
  deleteBtn.addEventListener("click", () => {
    removePost(postData.id);
  });
  buttonContainer.appendChild(deleteBtn);

  const editLink = createLink(`/post/edit/index.html?id=${postData.id}`, "", "Edit", ["btn", "btn-success", "ms-1"]);
  buttonContainer.appendChild(editLink);

  const cardBody = createElement("div", []);
  card.appendChild(cardBody);

  const title = createParagraf(postData.title, ["card-title", "fs-5", "fw-bolder"]);
  cardBody.appendChild(title);

  const body = createParagraf(postData.body, ["mb-3", "text-muted"]);
  cardBody.appendChild(body);

  const createdDate = createParagraf(`Updated: ${postData.updated.substring(0, 10)} `, ["text-muted", "fs-7"]);
  cardBody.appendChild(createdDate);

  const linkWhitImage = createLinkWithImage(
    `/post/index.html?id=${postData.id}`,
    "View post",
    postData.media,
    `Image from ${postData.title}`,
    [],
    ["card-img"]
  );
  container.appendChild(linkWhitImage);

  return container;
}

export function renderUserPostTemplate(postData, parent) {
  parent.append(userPostTemplate(postData));
}

export function renderUserPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(userPostTemplate));
}
