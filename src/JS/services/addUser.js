import { NewUser } from "./new-user-class.js";
import { db } from "../firebase/firebase.js";
import { ref,set } from "firebase/database";
// add users to database 
export async function addTodb(userName, password) {
  const user = new NewUser(userName, password);

  const refrenceToNewuser = ref(db, `Users/${user.id}`);

  const refrances = ref(db, `refrences/${user.userName}`);

  const popupContainer = document.querySelector(".popup-container");
  popupContainer.querySelector(".username").innerText = userName;
  popupContainer.querySelector(".password").innerText = password;
  document.querySelector(".confirm").addEventListener("click", async () => {
    await set(refrances, {
      id: user.id,
      password: user.password,
    });
    await set(refrenceToNewuser, user);
    popupContainer.classList.remove("visable");
  });

  document.querySelector(".Not-Now").addEventListener("click", () => {
    popupContainer.classList.remove("visable");
  });
  popupContainer.classList.add("visable");
}
