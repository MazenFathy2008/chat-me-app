export function displayFindFriend(){
  const navFindBtn = document.querySelector(".js-find-friend")
  const nav = document.querySelector(".js-nav")
  const body = document.querySelector("body")
  const popup = document.querySelector(".popup-container")
  navFindBtn.addEventListener("click",()=>{
    nav.classList.remove("nav-appearence")
    body.classList.remove("nav-background-blur")
    popup.classList.add("popup-visable")
  })
}
export function removeFindFriend(){
  const popup = document.querySelector(".popup-container")
  const closeBtn = document.querySelector(".close-popup")
  closeBtn.addEventListener('click',()=>{
    popup.classList.remove("popup-visable")
  })
}