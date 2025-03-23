import { NewUser } from "./new-user-class.js";
import { db } from "../firebase/firebase.js";
import { ref, get, set } from "firebase/database";
// function addUser(phoneNumber, password, UserName = "user1") {
//   const refrance = ref(db, `Users/${phoneNumber}`);
//   set(refrance, {
//     phoneNumber: phoneNumber,
//     password: password,
//     UserName: UserName,
//   });
// }

// const users = {
//   "12093902,4xx23": {
//     phoneNumber: "011122121",
//     username: "user1",
//     contacts: {
//       user2: {
//         id: "n3u1392b28327323b7",
//         massages: [
//           {
//             num: 1,
//             from: "me",
//             content: "hello , how are you",
//           },
//           {
//             num : 2,
//             from : "n3u1392b28327323b7",
//             content : "i am fine"
//           },
//         ],
//       },
//     },
//   },
// };
// const refrance = {
//   "011122121" : '12093902,4xx23'
// };
export function addTodb(phoneNumber, password) {
  const user = new NewUser(phoneNumber, password);
  const refrenceTouser = ref(db, `Users/${user.id}`);
  const refrances = ref(db, `refrences/${user.phoneNumber}`);
  set(refrances, user.id);
  set(refrenceTouser, user);
}
