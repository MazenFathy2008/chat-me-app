import { toggleNav } from "./main-utils/toogle-nav.js";
import { filterFindInput } from "./main-utils/filter-find-input.js";
import { displayFindFriend ,removeFindFriend } from "./main-utils/add-friend.js";
export function mainApp() {
  toggleNav();
  filterFindInput();
  displayFindFriend();
  removeFindFriend();
}
