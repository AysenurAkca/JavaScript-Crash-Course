// console.log("Hello World");
// console.error("This is an error");
// console.warn("This is a warning");

// let age=30;
// const score = 10;

// console.log(score);

// const firstName = "John";
// const age = 40;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof y)

//Concatenation
// console.log("My name is " + firstName + "and I am "+ age + " years old")

// //Template String
// console.log(`My name is ${firstName} and I am ${age}`)
// const a = "technology, computer, it"
// const s  = "Hello World!"
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0,5));
// console.log(a.split(","));

//Arrays

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);
// const fruits = ["apples","oranges","pears"];
// fruits[3]="grapes";
// fruits.push("mangos");
// fruits.unshift("strawberrys");
// fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf("oranges"));
// console.log(fruits[1]);

// const person = {
//     firstName : "Colt",
//     lastName : "Akca",
//     age : 42,
//     hobbies : ["music", "movies", "sports"],
//     address : {
//         street : "50 main st",
//         city : "Boston",
//         state : "MA"
//     }
// }
// console.log( person.firstName, person.lastName);

// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const {firstName, lastName} = person;
// console.log(firstName);

// const todos = [
//     {
//         id : 1,
//         text : "take out trash",
//         isCompleted : true
//     },
//     {
//         id : 2,
//         text : "meeting with boss",
//         isCompleted : true
//     },
//     {
//         id : 3,
//         text : "dentist appt",
//         isCompleted : false
//     }
// ]

// console.log(todos[1].text) ;

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

//For
// for(let i = 0; i<10; i++){
//     console.log(`For loop number ${i}`)
// }

// //While
// let i = 0 ;
// while(i<10){
//     console.log(`while loop number ${i}`);
//     i++;
// }

// for(let i = 0; i<todos.length; i++){
//     console.log(todos[i].text)
// }

// for (let todo of todos) {
//     console.log(todo.text);
// }

//forEach
// todos.forEach(function(todo){
//     console.log(todo.text)
// })

//map
// const todoText = todos.map(function(todo){
//     return todo.text
// })

// console.log(todoText);


//filter
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text
// })

// console.log(todoCompleted);

// const x = 8;
// const y = 10;

// if( x === 10){
//     console.log("x is 10");
// }else if(x>10) {
//     console.log("x is greater 10");
// }else {
//     console.log("x is not 10");
// }

// if(x>5 || y>10){
//     console.log("x is more than 5 or y is more than 10")
// }

//Ternanry Operator
// const color = x >10 ? "red" : "blue";
// console.log(color)

// switch(color){
//     case "red":
//         console.log("color is red");
//         break;
//     case "blue":
//         console.log("color is blue");
//         break;
//     defult:
//         console.log("color is not red or blue");
//         break;
// }

//Functions
// function addNums(num1=1, num2=1){
//     return num1+num2;
// }

// console.log(addNums(4,5));

// arrow function
// const addNums = (num1 =1, num2 = 1) => {
//     return num1+num2;
// }

// console.log(addNums(7,8))

// const addNums = (num1 =1, num2 = 1) => num1+num2;


// console.log(addNums(45,96))


//Constructor function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function (){
    //     return `${this.firstName} ${this.lastName}`
    // }






// //Prototype

// Person.prototype.getBirthYear = function (){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// console.log(person1.getBirthYear());

//Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear () {
        return this.dob.getFullYear();
    }
    getFullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

// const person1 = new Person("John", "Steele", "9-9-1992");
// console.log(person1);
// console.log(typeof person1);
// console.log(person1.getBirthYear())

// //Single element
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelector("h1"));

// //Multiple elements
// console.log(document.querySelectorAll(".item"));
// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

//Manipuleting Dom
// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent ="Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = ("<h4>Hello</h4>");

// const btn = document.querySelector(".btn");
// btn.style.backgroundColor = "red";

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (e)=> {
//     e.preventDefault();
//     console.log(e.target.className);
//     document.querySelector("#my-form").style.backgroundColor ="green";
//     document.querySelector("body").classList.add("bg-dark")
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value === "" || email.value === ""){
        msg.textContent = "Please enter a name or email";
        setTimeout(()=> msg.remove(), 3000)
    } else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${email.value}`))

        userList.appendChild(li);
        nameInput.value = "";
        email.value = "";
    }
}
