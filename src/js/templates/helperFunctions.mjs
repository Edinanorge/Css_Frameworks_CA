import { updatePost } from "../api/posts/update.mjs";
export function createElement(type, classes) {
  const element = document.createElement(type);
  element.classList.add(...classes);
  return element;
}

export function createButton(classes, title) {
  const button = document.createElement("button");
  button.classList.add(...classes);
  button.title = title;

  return button;
}

export function createButtonWhitTextContent(classes, textContent) {
  const button = document.createElement("button");
  button.classList.add(...classes);
  button.innerText = textContent;

  return button;
}

export function createLink(href, title, textContent, classes) {
  const link = document.createElement("a");
  link.href = href;
  link.title = title;
  link.textContent = textContent;
  link.classList.add(...classes);

  return link;
}

export function createLinkWithImage(href, title, src, alt, linkClasses, imgClasses) {
  const link = document.createElement("a");
  link.setAttribute("href", href);
  link.setAttribute("title", title);
  link.classList.add(...linkClasses);

  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  img.classList.add(...imgClasses);

  link.appendChild(img);
  return link;
}

export function createImage(classes, src, alt) {
  const image = document.createElement("image");
  image.classList.add(...classes);
  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
  return image;
}

export function createParagraf(innerText, classes) {
  const paragraf = document.createElement("p");
  paragraf.classList.add(...classes);
  paragraf.innerText = innerText;

  return paragraf;
}

export function createEditPostModal(postData) {
  // Create modal container
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal", "fade");
  modalContainer.id = "editPostModal";
  modalContainer.tabIndex = "-1";
  modalContainer.setAttribute("aria-labelledby", "editPostModalLabel");
  modalContainer.setAttribute("aria-hidden", "true");

  const modalDialog = createElement("div", ["modal-dialog"]);
  modalContainer.appendChild(modalDialog);

  const modalContent = createElement("div", ["modal-content", "bg-dark", "text-white"]);
  modalDialog.appendChild(modalContent);

  // Create modal body
  const modalBody = document.createElement("div", ["modal-body"]);
  modalContent.appendChild(modalBody);

  // Create modal title
  const modalTitle = createParagraf("Edit Post", ["modal-title", "fs-5", "text-center", "m-5"]);
  modalTitle.id = "editPostModalLabel";
  modalBody.appendChild(modalTitle);

  // Create form
  const form = document.createElement("form");
  form.classList.add("mx-auto", "w-100");
  form.id = "editPostForm";

  modalBody.appendChild(form);

  // Create hidden input field for post ID
  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.name = "id";
  hiddenInput.placeholder = "id";
  hiddenInput.value = postData.id;
  hiddenInput.required = true;
  form.appendChild(hiddenInput);

  // Create input fields for post title, body, tags, and media
  const titleInput = createFormInput("text", "title", "Title");
  form.appendChild(titleInput);

  const bodyInput = createFormInput("text", "body", "Body");
  form.appendChild(bodyInput);

  const tagsInput = createFormInput("text", "tags", "Tags");
  form.appendChild(tagsInput);

  const mediaInput = createFormInput("url", "media", "Media");
  form.appendChild(mediaInput);

  // Create submit button
  const editButton = createButtonWhitTextContent(["btn", "btn-primary", "btn-lg", "w-100", "my-3"], "Edit");
  editButton.type = "submit";
  form.appendChild(editButton);

  return modalContainer;
}

export function createDeletePostModal(postData) {
  const modalContainer = createElement("div", ["modal", "fade"]);
  modalContainer.id = "deletePostModal";
  modalContainer.tabIndex = "-1";
  modalContainer.setAttribute("aria-labelledby", "deletePostModalLabel");
  modalContainer.setAttribute("aria-hidden", "true");

  const dialog = createElement("div", ["modal-dialog"]);
  modalContainer.appendChild(dialog);

  const content = createElement("div", ["modal-content", "bg-dark", "text-white"]);
  dialog.appendChild(content);

  const body = createElement("div", ["modal-body"]);
  content.appendChild(body);

  const title = createParagraf("Are you sure you want to delete this post?", ["modal-title", "fs-4", "text-center"]);
  title.id = "deletePostModalLabel";
  body.appendChild(title);

  const form = document.createElement("form");
  form.classList.add("mx-auto", "w-100");
  form.id = "deletePostForm";
  body.appendChild(form);

  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.name = "id";
  hiddenInput.placeholder = "id";
  hiddenInput.value = postData.id;
  hiddenInput.required = true;
  form.appendChild(hiddenInput);

  const deleteButton = createButtonWhitTextContent(["btn", "btn-primary", "btn-lg", "w-100", "my-3"], "Delete");
  deleteButton.type = "submit";
  form.appendChild(deleteButton);

  return modalContainer;
}

function createFormInput(type, name, label) {
  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("form-floating", "mb-3");

  const input = document.createElement("input");
  input.type = type;
  input.classList.add("form-control", "border", "bg-input-color");
  input.name = name;
  input.placeholder = label;

  const inputLabel = document.createElement("label");
  inputLabel.htmlFor = name;
  inputLabel.innerText = label;

  inputWrapper.appendChild(input);
  inputWrapper.appendChild(inputLabel);

  return inputWrapper;
}
