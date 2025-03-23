export class NewUser {
  constructor(phoneNumber , password) {
    this.id = crypto.randomUUID();
    this.phoneNumber = phoneNumber;
    this.userName = `user_${Math.floor(1000 + Math.random() * 9000)}`;
    this.contacts = {};
    this.password = password;
  }
  updatePhoneNumber(newPhoneNumber) {
    this.phoneNumber = newPhoneNumber;
  }
}
