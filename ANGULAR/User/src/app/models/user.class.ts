export class User {
  email!: string;
  username!: string;
  password!: string;
  address!: string;

  constructor(
    email: string,
    username: string,
    password: string,
    address: string
  ) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.address = address;
  }
}
