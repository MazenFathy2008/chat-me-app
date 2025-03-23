import bcrypt from "bcryptjs";
export class NewUser {
  constructor(phoneNumber, password) {
    this.id = crypto.randomUUID();
    this.phoneNumber = phoneNumber;
    this.userName = `user_${Math.floor(1000 + Math.random() * 9000)}`;
    this.contacts = {};
    this.password = this.#encryptPassword(password);
  }
  updatePhoneNumber(newPhoneNumber) {
    this.phoneNumber = newPhoneNumber;
  }
  #encryptPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }
}
