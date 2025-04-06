export let lastChat = JSON.parse(localStorage.getItem("last-chat")) || false;
export function delLastChat(){
  lastChat = false
}
