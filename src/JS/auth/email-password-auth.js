import { db } from "../firebase/firebase.js";
import { get, ref } from "firebase/database";
import bcrypt from "bcryptjs";
import { saveUserId } from "../../localStorage/User-id.js";
//Check from the username and password from database (db)
export const authInfo = async (userName, userPassword) => {
  const refrence = ref(
    db,
    `refrences/${userName}`
  ); /* refrence to the id and password*/
  const dataRefrencess = await get(refrence);
  const errMsg = document
    .querySelector(".js-password-field")
    .querySelector(".js-error-msg");
  errMsg.classList.remove("visable");

  if (dataRefrencess.exists()) {
    console.log("the data is Exist");
    if (bcrypt.compareSync(userPassword, dataRefrencess.val().password)) {
      console.log("the password is correct");
      const id = dataRefrencess.val().id
      saveUserId(id);
      localStorage.setItem("signed-in", JSON.stringify(dataRefrencess.val()));
      return "data founded";
    } else {
      console.log("password is wrong ");
      errMsg.innerText = "Wrong Password";
      errMsg.classList.add("visable");
      return "password wrong";
    }
  } else {
    console.log("data not found ");
    return false;
  }
};
