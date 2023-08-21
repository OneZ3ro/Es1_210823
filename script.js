class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static diffAge(user1, user2) {
    if (user1.age > user2.age) {
      return user1.firstName + " è più vecchio di " + user2.firstName;
    } else if (user2.age > user1.age) {
      return user2.firstName + " è più vecchio di " + user1.firstName;
    } else {
      return user1.firstName + " e " + user2.firstName + " hanno la stessa età";
    }
  }
}

const userX = new User("Giacomo", "Figatti", 50, "Milano");
const userY = new User("Aldo", "Moretti", 50, "Puglia");
const userZ = new User("Francesco", "Rossi", 40, "Venezia");
const userK = new User("Tommaso", "Bianchi", 30, "Modena");
const userJ = new User("Pasquale", "Di Nozzo", 20, "Napoli");

console.log(User.diffAge(userX, userZ));
