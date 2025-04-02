import { userId } from "../../../localStorage/User-id";
import { db } from "../../firebase/firebase";
import { get , ref } from "firebase/database";
export async function getInfo() {
  const friendsListElements = document.querySelector(".js-friends-list")
  const id =JSON.parse(userId)
  const userInfoRef = ref(db , `Users/${id}`)
  const userInfo = (await get(userInfoRef)).val()
  userNameNav(userInfo.userName)
}
function userNameNav(userName){
  const userNameElement = document.querySelector(".js-username-place")
  const userNameSpan = document.createElement("span")
  userNameSpan.innerText=userName
  userNameElement.appendChild(userNameSpan)
}