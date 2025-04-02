import { toggleNav } from "./main-utils/toogle-nav.js";
import { filterFindInput } from "./main-utils/filter-find-input.js";
import {
  displayFindFriend,
  removeFindFriend,
} from "./main-utils/add-friend.js";
import { getInfo } from "./main-utils/get-info.js";
export function mainApp() {
  getInfo();
  toggleNav();
  filterFindInput();
  displayFindFriend();
  removeFindFriend();
}
