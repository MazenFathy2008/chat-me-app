export function removeLoader(){
  const loader = document.querySelector("#loader-div")
  setTimeout(()=>{
  loader.classList.remove("loader-visable")
  } , 500)
}
export function addLoader(){
  const loader = document.querySelector("#loader-div")
  loader.classList.add("loader-visable")
}