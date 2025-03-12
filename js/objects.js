const output = document.getElementById('output');

/* STEP 1: Create an object (looks a lot like declaring a variable, but with empty braces), 
then open this page in a browser and enter 'person' in the console */
let person = {
    name: {
        firstName: "Tumhang",
        lastName: "Limbu"
    },
    age: 24,
    gender: "Male",
    address: "245 Ferndale Dr",
    interests: ["football", "basketball", "gym"],

    greeting: function () {
        alert(`Hello ${this.name.firstName}, How are you?`);
    },

    bio: function () {
        return `The interests of ${this.name.firstName} ${this.name.lastName}, age ${this.age}, living at ${this.address}, are ${this.interests.join(", ")}.`;
    }
};

/* STEP 2a: Add other data items to the above object, like name, age, gender, address, and interests */
let person2 = {
    name: {
        firstName: "Tumhang",
        lastName: "Limbu"
    },
    age: 24,
    gender: "Male",
    address: "245 Ferndale Dr",
    interests: ["football", "basketball", "gym"],

    greeting: function () {
        alert(`Hello ${this.name.firstName}, How are you?`);
    },

    bio: function () {
        return `The interests of ${this.name.firstName} ${this.name.lastName}, age ${this.age}, living at ${this.address}, are ${this.interests.join(", ")}.`;
    }
};

/* STEP 2b: Enter the following directly into the console:
    person.name[0]
    person.age
    person.gender
    person.interests[0]
*/

/* STEP 3: Add a simple function (now called a method in this context) to the above object 
called "greeting" that creates an alert dialog, then type person.greeting() into the console */

/* STEP 4: Add a more complicated function to the object that describes the person, their age, gender, 
    and interests in a string that is output to an alert dialog */

// The object above is called an 'object literal' - in that we build each part of the object manually, 
// rather than instatiating it from a class (which we will cover later). 
// Objects can be easier to work with than arrays, as you can name each element

/* STEP 5a: Dot syntax allows you to access the parts of an object - the first part is the namespace, 
and subsequent parts are used to access things encapsulated within the object. Access the name, age, 
and gender of the person object, and put it inside the <p id="output"></p>. */
if (output) {
    output.textContent = person.bio();
}

/* STEP 5b: Update the above bio() function inside the person object to return 
the string, instead of the alert(). */

/* STEP 6a: An object can even contain another object - update object person above to include a name object. 
Note how this breaks the greeting and bio functions - update the greeting function to use this sub-namespace */
person.greeting = function () {
    alert(`Hello ${this.name.firstName} ${this.name.lastName}, How are you?`);
};

/* STEP 6b: Now fix the bio() function to use the sub-namespace of 'name' as well */
person.bio = function () {
    return `The interests of ${this.name.firstName} ${this.name.lastName}, age ${this.age}, living at ${this.address}, are ${this.interests.join(", ")}.`;
};

/* STEP 7: You can also use bracket notation, just like an array - 
objects that are built this way are often referred to as associative arrays */
console.log(person["address"]);
console.log(person2["address"]);

/* STEP 8: You can also set members of an object - try changing the person's name, and age */
person.age = 80;

/* STEP 9a: It it also possible to add new members to an object - include eye color - and type person.eyes in the console */
person.eyeColor = "Green";
person2.eyeColor = "Brown";

/* STEP 9b: Add a new function called 'goodbye' to the person object and try it by typing person.goodbye into the console */
person.goodbye = function () {
    alert(`This is ${this.name.firstName} signing off!`);
};

person2.goodbye = function () {
    alert(`This is ${this.name.firstName} ${this.name.lastName} signing off!`);
};

/* STEP 10: We can also dynamically set both names and values for objects… */
let key = "hairColor";
let value = "Black";
person[key] = value;
person2[key] = "Dark Brown";

/* STEP 11a: 'this' is very useful - it allows us to refer to the object in question, specifically. 
This will become much clearer later in the course. Create two new objects, 
each with a name, and a function that outputs the name */
let person1 = {
    name: "P1",
    hello: function () {
        alert(`Hello, this is ${this.name}.`);
    }
}

let person3 = { // Renamed to avoid duplicate "person2"
    name: "P2",
    hello: function () {
        alert(`Hello, this is ${this.name}.`);
    }
};

/* STEP 11b: Call up both person1.hello() and person2.hello() 
in the console to see how 'this' is specific to each object */
console.log(person1.hello());
console.log(person3.hello());

// You have already been using objects all along:
let myString = 'Words, words, words.'; 
const elem = document.getElementById('output'); 


// Next, open up oop.html and we will delve a bit deeper into JavaScript objects.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics