import bcrypt from "bcryptjs";
export class NewUser {
  constructor(userName, password) {
    this.id = crypto.randomUUID();
    this.userName = userName;
    this.contacts = {};
    this.password = this.#encryptPassword(password);
  }
  updateUsernae(NewUsername) {
    this.userName = NewUsername;
  }
  #encryptPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }
}
