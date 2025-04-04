import { get, ref, set } from "firebase/database";
import { userId } from "../../../localStorage/User-id";
import { db } from "../../firebase/firebase";
import { getInfo } from "../main-utils/get-info";
export async function addFriend() {
  const addFriendField = document.querySelector(".js-find-friend-input");
  const addFriendBtn = document.querySelector(".js-find-friend-button");
  const errMsgElement = document.querySelector(".js-error-msg");
  const myId = JSON.parse(userId);
  addFriendBtn.addEventListener("click", async () => {
    errMsgElement.classList.remove("visable");
    const friendName = addFriendField.value;
    const friendNameRef = ref(db, `refrences/${friendName}/id`);
    const popup = document.querySelector(".popup-container");
    const friendId = await get(friendNameRef);
    if (myId != friendId.val() && friendId.exists()) {
      const friendIdRef = ref(db, `Users/${friendId.val()}/contacts`);
      const friendContact = await get(friendIdRef);
      const areFriends = friendContact.child(myId).exists();
      if (areFriends) {
        errMsgElement.innerText = "already your friend stupid";
        errMsgElement.classList.add("visable");
      } else {
        const chatKey = crypto.randomUUID();
        const yourNameRef = ref(db, `Users/${myId}/userName`);
        const yourName = (await get(yourNameRef)).val();
        const newFriendRef = ref(
          db,
          `Users/${friendId.val()}/contacts/${myId}`
        );
        const yourNewContactRef = ref(
          db,
          `Users/${myId}/contacts/${friendId.val()}`
        );
        await set(newFriendRef, {
          userName: yourName,
          chatKey: chatKey,
        });
        await set(yourNewContactRef, {
          userName: friendName,
          chatKey: chatKey,
        });
        getInfo(false);
      }
      popup.classList.remove("popup-visable");
    } else if (myId === friendId.val()) {
      errMsgElement.innerText = "this is you stubid";
      errMsgElement.classList.add("visable");
    } else {
      errMsgElement.classList.add("visable");
      errMsgElement.innerText = "user isn't exist";
    }
  });
}
