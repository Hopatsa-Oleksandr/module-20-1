import b from "./b";

console.log(b);

const a = 5;

class User {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(this.name);
  }
}

new User("Dunya").showName();

export default a;
