//Arrays -Variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

let fruits = ['apples', 'oranges', 'bananas'];
fruits[3]='grapes';
console.log(fruits);


//to add an item at the end of the array
fruits.push('cherry');
console.log(fruits);

//to add an item at the beginning of the array:
fruits.unshift('litchi');
console.log(fruits);

//To remove the last item from the array:
fruits.pop();
console.log(fruits);

//To check if something is in the array :
console.log(Array.isArray(fruits));

console.log(Array.isArray('oranges'));


//To get the index of an element :
console.log(fruits.indexOf('oranges'));

//Object Literals
let person = {
    firstName: 'Shreya',
    lastName: 'Gupta',
    age: 21,
    hobbies: ['music','video games','sports'],
    address : {
      street: 'B 26/191-A',
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      country: 'India'
    }
}

//we can directly add proprties in the above:
person.email ='Shreya@gmail.com';

console.log(person.email);

//Arrays of todos:
const todos = [
    {
       id:1,
       text:'Meeting with boss',
       isCompleted:true,
    },
    {
        id:2,
        text:'Take out Trash',
        isCompleted:true,
     },
     {
        id:3,
        text:'Dentist App',
        isCompleted:false, 
     }
];

console.log(todos[1].text);

//JSON

/* The format of json is very much similar to object literals.. the only difference is that in object literals we use sinle quotes whereas in json we use double quotes for all keys and strings */

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//LOOPS 
//for loops:
for(let i=0; i<=10;i++) {
    console.log(`For loop number: ${i}`)
}

//While loop:
