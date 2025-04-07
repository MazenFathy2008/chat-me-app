import { db } from "../../firebase/firebase";
import { onChildAdded, ref, get } from "firebase/database";
import { addLoader, removeLoader } from "../../utils/loader";
import { changeHistory } from "../../services/history-push";
import { sendMsg } from "./send-msg";
export async function getChat(chatKey, friendName, yourName) {
  addLoader();
  changeHistory(`main-page?friend_name=${friendName}`);
  const chatRefrence = ref(db, `chats/${chatKey}/chat`);
  const chatSectionRef = ref(db, "templates/chat-section");
  const chatSectionHtml = (await get(chatSectionRef)).val();
  const chatSectionElement = document.querySelector("section");
  chatSectionElement.innerHTML = chatSectionHtml;
  const chatListElement = chatSectionElement.querySelector("ul");
  onChildAdded(chatRefrence, (snapShot) => {
    const msg = snapShot.val();
    const msgElement = document.createElement("li");
    const fromSpan = document.createElement("span")
    const msgContentElement = document.createElement("p")
    fromSpan.innerText = msg.from
    msgElement.appendChild(fromSpan)
    msgContentElement.innerText = msg.content;
    msgElement.appendChild(msgContentElement)
    if (!(msg.from === friendName)) {
      msgElement.classList.add("from-me");
    } else {
      msgElement.classList.add("to-me");
    }
    chatListElement.appendChild(msgElement);
    chatListElement.scrollTop = chatListElement.scrollHeight;
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
