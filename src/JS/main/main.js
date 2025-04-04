import { toggleNav } from "./main-utils/toogle-nav.js";
import { filterFindInput } from "./main-utils/filter-find-input.js";
import {
  displayFindFriend,
  removeFindFriend,
} from "./main-utils/add-friend.js";
import { getInfo } from "./main-utils/get-info.js";
import { addFriend } from "./main-services/add-friend.js";
import { logOut } from "./main-services/log-out.js";
export async function mainApp() {
  await getInfo();
  toggleNav();
  filterFindInput();
  displayFindFriend();
  removeFindFriend();
  addFriend();
  logOut();
}
