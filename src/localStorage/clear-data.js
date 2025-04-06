import { delLastChat } from "./last-chat.js";
export function clearData() {
  localStorage.removeItem("signed-in");
  localStorage.removeItem("userId");
  localStorage.removeItem("last-chat");
  delLastChat();
  // console.log(lastChat)
}
