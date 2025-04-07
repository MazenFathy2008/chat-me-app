import { db } from "../../firebase/firebase";
import { ref, push } from "firebase/database";
export function sendMsg(friendName, yourName, chatKey) {
  const msgInputElement = document.querySelector(".js-msg-input");
  msgInputElement.addEventListener("input", () => {
    const value = msgInputElement.value.trim();

    if (/^[\u0600-\u06FF]/.test(value)) {
      msgInputElement.style.direction = 'rtl';
    } else {
      msgInputElement.style.direction = 'ltr';
    }
    msgInputElement.value = msgInputElement.value.trimStart();
    msgInputElement.scrollTop = msgInputElement.scrollHeight;
  });
  const sendBtn = document.querySelector(".js-send-btn");
  sendBtn.addEventListener("click", () => {
    sendMsgLogic(friendName, yourName, chatKey);
  });
}
async function sendMsgLogic(friendName, yourName, chatKey) {
  const chatSectionElement = document.querySelector("section");
  const chatListElement = chatSectionElement.querySelector("ul");
  const msgInputElement = document.querySelector(".js-msg-input");
  const msg = msgInputElement.value;
  const chatRef = ref(db, `chats/${chatKey}/chat`);
  if (msg) {
    push(chatRef, {
      from: yourName,
      content: msg,
    });
  }
  msgInputElement.value = "";
}
