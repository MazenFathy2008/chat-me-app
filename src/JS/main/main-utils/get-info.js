import { userId } from "../../../localStorage/User-id.js";
import { db } from "../../firebase/firebase";
import { get, ref ,onChildAdded } from "firebase/database";
import { getChat } from "../main-services/chat.js";
import { lastChat } from "../../../localStorage/last-chat.js";
import { mainSignIn } from "../../Sign-in/Sign-in.js";
export async function getInfo(withUserName = true) {
  try {
    const id = JSON.parse(userId);
    const userInfoRef = ref(db, `Users/${id}`);
    const userInfo = (await get(userInfoRef)).val();
    if (withUserName) {
      userNameNav(userInfo.userName);
    }
    friendsListNav(userInfo.userName , id);
    if (lastChat) {
      getChat(lastChat.chatKey, lastChat.friendName , userInfo.userName);
    }
  }catch{
    document.querySelector("body").classList.remove("nav-background-blur");
    document.querySelector(".js-nav").classList.remove("nav-appearence");
    const main = document.querySelector("#app");
    const body = document.querySelector("body");
    main.innerHTML = "";
    body.classList.remove("main-page");
    body.classList.add("sign-in-bage");
    const pageRef = ref(db, "templates/signIn");
    const html = (await get(pageRef)).val();
    main.innerHTML = html;
    mainSignIn();
  }
  
}

function userNameNav(userName) {
  const userNameElement = document.querySelector(".js-username-place");
  const userNameSpan = document.createElement("span");
  userNameSpan.innerText = userName;
  userNameElement.appendChild(userNameSpan);
}

export async function friendsListNav(yourName , id){
  const friendsListElements = document.querySelector(".js-friends-list");
  const friends = document.querySelectorAll(".js-friend");
  friends.forEach((friend) => {
    friendsListElements.removeChild(friend);
  });
  const contactsRef = ref(db , `Users/${id}/contacts`)
  onChildAdded(contactsRef , (snapShot)=>{
    const friendChatInfo = snapShot.val()
    const friendUserName = friendChatInfo.userName;
    const friendChatId = friendChatInfo.chatKey;
    const newFriendLi = document.createElement("li");
    newFriendLi.classList.add("js-friend");
    newFriendLi.innerText = friendUserName;
    friendsListElements.appendChild(newFriendLi);
    startChat(newFriendLi, friendChatId, friendUserName, yourName);
  })
}

function startChat(friendLink, chatKey, friendName, yourName) {
  const nav = document.querySelector(".js-nav")
  const body = document.querySelector("body")
  friendLink.addEventListener("click", () => {
    getChat(chatKey, friendName, yourName);
    body.classList.remove("nav-background-blur")
    nav.classList.remove("nav-appearence")
  });
}
