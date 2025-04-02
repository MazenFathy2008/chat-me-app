export let userId = localStorage.getItem("userId") || false;
export function saveUserId(id) {
  localStorage.setItem("userId", JSON.stringify(id));
  userId = JSON.stringify(id);
}
