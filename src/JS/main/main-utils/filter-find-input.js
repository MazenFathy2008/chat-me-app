export function filterFindInput() {
  const field = document.querySelector(".js-find-friend-input");
  field.addEventListener("input", ()=>{
    field.value = field.value.replace(/[^a-zA-Z0-9-#@_!]/g, "");
  })
}
