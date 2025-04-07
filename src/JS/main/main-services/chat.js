import { db } from "../../firebase/firebase";
import { get, ref } from "firebase/database";
import { addLoader, removeLoader } from "../../utils/loader";
import { changeHistory } from "../../services/history-push";
import { sendMsg } from "./send-msg";
export async function getChat(chatKey, friendName, yourName) {
  addLoader();
  changeHistory(`main-page?friend_name=${friendName}`);
  const chatRefrence = ref(db, `chats/${chatKey}/chat`);
  const chat = (await get(chatRefrence)).val() || {};
  const msgKey = Object.keys(chat);
  const chatSectionRef = ref(db, "templates/chat-section");
  const chatSectionHtml = (await get(chatSectionRef)).val();
  const chatSectionElement = document.querySelector("section");
  chatSectionElement.innerHTML = chatSectionHtml;
  const chatListElement = chatSectionElement.querySelector("ul");
  msgKey.forEach((msg) => {
    console.log(msg);
    const msgElement = document.createElement("li");
    if (!(chat[msg].from === friendName)) {
      msgElement.classList.add("from-me");
      msgElement.innerText = `From : ${yourName} \n \n  ${chat[msg].content}`;
    } else {
      msgElement.classList.add("to-me");
      msgElement.innerText = `From : ${friendName} \n \n  ${chat[msg].content}`;
    }
    chatListElement.appendChild(msgElement);
  });
  localStorage.setItem(
    "last-chat",
    JSON.stringify({
      chatKey: chatKey,
      friendName: friendName,
    })
  );
  removeLoader();
  sendMsg(friendName, yourName, chatKey);
}
