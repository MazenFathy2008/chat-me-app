import { db } from "../../firebase/firebase";
import { get, ref } from "firebase/database";
import { addLoader, removeLoader } from "../../utils/loader";
import { changeHistory } from "../../services/history-push";
export async function getChat(chatKey, friendName) {
  addLoader();
  changeHistory(`main-page?friend_name=${friendName}`);
  const chatRefrence = ref(db, `chats/${chatKey}/chat`);
  const chat = (await get(chatRefrence)).val() || [];
  const chatSectionRef = ref(db, "templates/chat-section");
  const chatSectionHtml = (await get(chatSectionRef)).val();
  const chatSectionElement = document.querySelector("section");
  chatSectionElement.innerHTML = chatSectionHtml;
  const chatListElement = chatSectionElement.querySelector("ul");
  chat.forEach((msg) => {
    const msgElement = document.createElement("li");
    msgElement.innerText = msg.content;
    if (!(msg.from === friendName)) {
      msgElement.classList.add("from-me");
    } else {
      msgElement.classList.add("to-me");
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
}
