interface Person {
  name: string;
}

function printName(person: Person) {
  console.log(person.name);
}

let myObj = {name:'sheep'};
printName(myObj);