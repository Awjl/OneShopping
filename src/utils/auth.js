import Cookies from "js-cookie";

const UtkKey = "utk";

export function getUtk() {
  return Cookies.get(UtkKey);
}

export function setUtk(Utk) {
  return Cookies.set(UtkKey, Utk);
}

export function removeUtk() {
  return Cookies.remove(UtkKey);
}
