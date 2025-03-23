import { NewUser } from "./new-user-class.js";
import { db } from "../firebase/firebase.js";
import { ref, get, set } from "firebase/database";
export async function addTodb(phoneNumber, password) {
  const user = new NewUser(phoneNumber, password);
  const refrenceToNewuser = ref(db, `Users/${user.id}`);
  const refrances = ref(db, `refrences/${user.phoneNumber}`);
  const isExist = (await get(refrances)).exists();
  console.log(isExist)
  if (!isExist) {
    const popupContainer = document.querySelector(".popup-container");
    popupContainer.querySelector(".number").innerText = phoneNumber;
    popupContainer.querySelector(".password").innerText = password;
    document.querySelector(".confirm").addEventListener("click", () => {
      set(refrances, {
        id: user.id,
        password: user.password,
      });
      set(refrenceToNewuser, user);
    });
    document.querySelector(".Not-Now").addEventListener("click", () => {
      popupContainer.classList.remove("visable");
    });
    popupContainer.classList.add("visable");
  }
}
