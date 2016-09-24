interface Person {
  name: string;
}

function printName(person: Person) {
  console.log(person.name);
}

let myObj = {name:'sheep'};
printName(myObj);

// 属性可选
interface Person2 {
  name?: string;
}

// 属性只读
// interface PersonOnly {
//   readonly name: string;
// }

// let sheep: PersonOnly = { name:'sheep' };
// sheep.name = 'miemie';
// error!