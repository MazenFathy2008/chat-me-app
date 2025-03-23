import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { firebaseConfig } from "./firebase-config.js";
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
