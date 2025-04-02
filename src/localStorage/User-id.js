export let userId = localStorage.getItem("userId");
export function saveUserId(id) {
  localStorage.setItem("userId", JSON.stringify(id));
  userId = JSON.stringify(id);
}
