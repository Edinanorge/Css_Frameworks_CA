export function displayMessage(message, style) {
  const feedback = document.querySelector("#message");
  feedback.innerText = message;
  feedback.classList.add(style);
}
