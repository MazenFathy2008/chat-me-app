import { userId } from "../../../localStorage/User-id";
import { db } from "../../firebase/firebase";
import { get, ref } from "firebase/database";
export async function getInfo() {
  const id = JSON.parse(userId);
  const userInfoRef = ref(db, `Users/${id}`);
  const userInfo = (await get(userInfoRef)).val();
  userNameNav(userInfo.userName);
  const contacts = userInfo.contacts || {}
  friendsListNav(contacts);
}
function userNameNav(userName) {
  const userNameElement = document.querySelector(".js-username-place");
  const userNameSpan = document.createElement("span");
  userNameSpan.innerText = userName;
  userNameElement.appendChild(userNameSpan);
}
function friendsListNav(friendsList) {
  const friendsListElements = document.querySelector(".js-friends-list");
  const friendsNamesArray = Object.keys(friendsList);
  friendsNamesArray.forEach((friend) => {
    const newFriendLi = document.createElement("li");
    newFriendLi.innerText = friend;
    friendsListElements.appendChild(newFriendLi);
  });
}
