import { db } from "../firebase/firebase.js";
import { get, ref } from "firebase/database";
import bcrypt from "bcryptjs";

export const authInfo = async (userName, userPassword) => {
  const refrence = ref(db, `refrences/${userName}/password`);
  const dataRefrencess = await get(refrence);
  const errMsg = document
    .querySelector(".js-password-field")
    .querySelector(".js-error-msg");
  errMsg.classList.remove("visable");

  if (dataRefrencess.exists()) {
    console.log("the data is Exist");
    if (bcrypt.compareSync(userPassword, dataRefrencess.val())) {
      console.log("the password is correct");
      return true;
    } else {
      console.log("password is wrong ");
      errMsg.innerText = "Wrong Password";
      errMsg.classList.add("visable");
      return true;
    }
  } else {
    console.log("data not found ");
    return false;
  }
};
