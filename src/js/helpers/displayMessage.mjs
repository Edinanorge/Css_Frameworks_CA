export function displayMessage(container, message, style) {
  const feedback = document.getElementById(container);
  feedback.innerText = message;
  feedback.classList.add(style);
}
