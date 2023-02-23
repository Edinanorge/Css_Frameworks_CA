import { createElement } from "./helperFunctions.mjs";

export function spinnerTemplate(parent) {
  // const markup = `<div class="text-center">
  //                   <div class="spinner-border" role="status">
  //                     <span class="visually-hidden">Loading...</span>
  //                   </div>
  //                 </div>`;
  // parent.insertAdjacentHTML("afterbegin", markup);

  const container = createElement("div", ["text-center"]);

  const spinner = createElement("div", ["spinner-border"]);
  spinner.role = "status";
  container.appendChild(spinner);

  const spinnerText = createElement("span", ["visually-hidden"]);
  spinnerText.innerText = "Loading...";
  spinner.appendChild(spinnerText);
}

export function renderSpinnerTemplate(parent) {
  parent.append(spinnerTemplate);
}
