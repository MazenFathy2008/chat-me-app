import { NewUser } from "./new-user-class.js";
import { db } from "../firebase/firebase.js";
import { ref, get, set } from "firebase/database";
import { signIN, signINBtn } from "../index.js";
export async function addTodb(phoneNumber, password) {
  const user = new NewUser(phoneNumber, password);
  const refrenceToNewuser = ref(db, `Users/${user.id}`);
  const refrances = ref(db, `refrences/${user.phoneNumber}`);
  const isExist = (await get(refrances)).exists();
  if (!isExist) {
    let respond = confirm("do you want to creat account");
    if (respond) {
      set(refrances, {
        id: user.id,
        password: user.password,
      });
      set(refrenceToNewuser, user);
    }
  }
  return isExist;
}
