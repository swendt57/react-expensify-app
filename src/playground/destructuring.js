console.log('Destructuring Examples');

//Object Destructuring

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self Published'} = book.publisher;
//
// console.log(publisherName);
//
//
// const person = {
//     name: 'Steve',
//     age: 62,
//     location: {
//         city: 'San Diego',
//         temp: 70
//     }
// }
//
// const {name = 'Anonymous', age} = person;
//
// const {city, temp: temperature} = person.location; //renamed temp
//
// if (temperature && city) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

//regular way
// const name = person.name;
// const age = person.age

// if (person.location.temp && person.location.city) {
//     console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// }


// console.log(`${name} is ${age}.`);
//
// console.log(`It's ${person.location.temp} in ${person.location.city}.`);

//Array destructuring

const address = ['2220 Ridge View Dr', 'San Diego', 'California', '92105'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${address[1]} ${address[2]}`);

console.log(`You are in ${city} ${state}`);

// const [, city, state] = address; //only pulls back index 1 and 2 from array

//challenge

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [type, , medium] = item;

console.log(`A medium ${type} costs ${medium}`);