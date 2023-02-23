import {
  createButtonWhitTextContent,
  createParagraf,
  createElement,
  createImage,
  createLink,
  createLinkWithImage,
  createEditPostModal,
  createDeletePostModal,
} from "./helperFunctions.mjs";

export function userPostTemplate(postData) {
  if (!postData.media) postData.media = "https://picsum.photos/id/151/4288/3216";
  const container = createElement("div", ["card", "bg-white", "text-dark", "feed", "mb-3", "mt-lg-3"]);

  const linkWhitImage = createLinkWithImage(
    `#`,
    "View post",
    postData.media,
    `Image from ${postData.title}`,
    [],
    ["card-img"]
  );
  container.appendChild(linkWhitImage);

  const card = createElement("div", ["card-body"]);
  container.appendChild(card);

  const title = createParagraf(postData.title, ["card-title", "text-primary", "fw-bolder"]);
  card.appendChild(title);

  const body = createParagraf(postData.body, ["mb-3", "fw-lighter"]);
  card.appendChild(body);

  const buttonEdit = createButtonWhitTextContent(["card-link", "text-success", "btn", "border-success"], "Edit");
  buttonEdit.setAttribute("data-bs-toggle", "modal");
  buttonEdit.setAttribute("data-bs-target", "#editPostModal");
  card.appendChild(buttonEdit);

  const buttonDelete = createButtonWhitTextContent(
    ["card-link", "text-danger", "btn", "border-danger", "ms-3"],
    "Delete"
  );
  buttonEdit.setAttribute("data-bs-toggle", "modal");
  buttonEdit.setAttribute("data-bs-target", "#deletePostModal");
  card.appendChild(buttonDelete);

  const editPostModal = createEditPostModal(postData);
  card.append(editPostModal);

  // const deletePostModal = createDeletePostModal(postData);
  // container.appendChild(deletePostModal);

  return container;
}

export function renderUserPostTemplate(postData, parent) {
  parent.append(userPostTemplate(postData));
}

export function renderUserPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(userPostTemplate));
}
