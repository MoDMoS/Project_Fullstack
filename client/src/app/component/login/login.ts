export class Login {
  UserID: string;
  password: string;

  constructor(UserID: string, password: string) {
    this.UserID = UserID;
    this.password = password;
  }
}
