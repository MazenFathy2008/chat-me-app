export function removeLoader(){
  const loader = document.querySelector("#loader-div")
  loader.classList.remove("loader-visable")
}
export function addLoader(){
  const loader = document.querySelector("#loader-div")
  loader.classList.add("loader-visable")
}