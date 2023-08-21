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

//____________________________________________________________________________________________________________

const animalArr = [];
const lista = document.getElementById("lista");
const input = document.querySelectorAll("input");
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static isSameOwner(animalX, animalY) {
    if (animalX.ownerName === animalY.ownerName) {
      return true;
    }
  }
}

const createAnimal = function (event) {
  event.preventDefault();
  const arr = [];

  for (let i = 0; i < input.length; i++) {
    arr.push(input[i].value);
  }

  const animal = new Pet(arr[0], arr[1], arr[2], arr[3]);
  animalArr.push(animal);

  const li = document.createElement("li");
  li.innerText = `Nome animale: ${animal.petName};\n Nome padrone: ${animal.ownerName};\n Specie ${animal.petName}: ${animal.species} ${animal.breed}`;
  li.style.marginBottom = "30px";
  lista.appendChild(li);

  if (animalArr.length >= 2) {
    console.log(Pet.isSameOwner(animalArr[0], animalArr[1]));
  }
  //   console.log(arr);
  //   console.log(animal);
  //   console.log(animalArr);
};
