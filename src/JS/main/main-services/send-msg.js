import { db } from "../../firebase/firebase";
import { ref, set, push, get } from "firebase/database";
export function sendMsg(friendName, yourName, chatKey) {
  const msgInputElement = document.querySelector(".js-msg-input");
  msgInputElement.addEventListener("input", () => {
    msgInputElement.value = msgInputElement.value.trimStart();
  });
  const sendBtn = document.querySelector(".js-send-btn");
  console.log(sendBtn);
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

    const msgElement = document.createElement("li");
    msgElement.innerText = `From : ${yourName} \n \n  ${msg}`;
    msgElement.classList.add("from-me");
    chatListElement.appendChild(msgElement);
  }
  msgInputElement.value = "";
}
