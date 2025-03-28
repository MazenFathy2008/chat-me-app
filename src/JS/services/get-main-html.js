import { get, ref } from "firebase/database";
import { db } from "../firebase/firebase.js";
export async function updateToMainPage() {
  const refrenceOfpage = ref(db, "templates/main");
  const html = (await get(refrenceOfpage)).val();
  document.querySelector("#app").innerHTML = html;
}
