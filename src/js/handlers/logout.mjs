import { logout } from "../api/auth/logout.mjs";

export function logoutHandler(person) {
  person.logout();
  window.location.href = "/";
}
