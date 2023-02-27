import * as storage from "../../storage/index.mjs";

export function logout() {
  storage.clear();
  location.path = "/";
}
