import { userId } from "../../../localStorage/User-id.js";
import { db } from "../../firebase/firebase";
import { get, ref } from "firebase/database";
import { changeHistory } from "../../services/history-push.js";
export async function getInfo(withUserName = true) {
  const id = JSON.parse(userId);
  const userInfoRef = ref(db, `Users/${id}`);
  const userInfo = (await get(userInfoRef)).val();
  if (withUserName) {
    userNameNav(userInfo.userName);
  }
  const contacts = userInfo.contacts || {};
  friendsListNav(contacts);
}
function userNameNav(userName) {
  const userNameElement = document.querySelector(".js-username-place");
  const userNameSpan = document.createElement("span");
  userNameSpan.innerText = userName;
  userNameElement.appendChild(userNameSpan);
}
export async function friendsListNav(friendsList) {
  const friendsListElements = document.querySelector(".js-friends-list");
  const friends = document.querySelectorAll(".js-friend");
  friends.forEach((friend) => {
    friendsListElements.removeChild(friend);
  });
  const friendsNamesArray = Object.keys(friendsList);
  friendsNamesArray.forEach(async (friend) => {
    const friendRef = ref(
      db,
      `Users/${JSON.parse(userId)}/contacts/${friend}`
    );
    const friendChatInfo = (await get(friendRef)).val();
    const friendUserName = friendChatInfo.userName
    const friendChatId = friendChatInfo.chatKey
    const newFriendLi = document.createElement("li");
    newFriendLi.classList.add("js-friend");
    newFriendLi.innerText = friendUserName;
    friendsListElements.appendChild(newFriendLi);
    startChat(newFriendLi , friendChatId , friendUserName)
  });
}
function startChat(friendLink, chatKey , name){
  friendLink.addEventListener("click" , ()=>{
    changeHistory(`main-page?friend_name=${name}`)
    console.log(chatKey)
  })
}