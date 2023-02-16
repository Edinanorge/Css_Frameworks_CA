import * as storage from "../../storage/index.mjs";

export function headers() {
  const token = storage.load("token");

  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}
