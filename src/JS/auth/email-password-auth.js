import { db } from "../firebase/firebase.js";
import { get, ref } from "firebase/database";
import bcrypt from "bcryptjs";

export const authInfo = async (userPhoneNumber, userPassword) => {
  const refrence = ref(db, `refrences/${userPhoneNumber}/password`);
  const dataRefrencess = await get(refrence);
  if (dataRefrencess.exists()) {
    console.log("the data is Exist");
    if (bcrypt.compareSync(userPassword, dataRefrencess.val())) {
      console.log("the password is correct");
      return true;
    } else {
      console.log("password is wrong ");
      return false;
    }
  } else {
    console.log("data not found ");
    return false;
  }
};
