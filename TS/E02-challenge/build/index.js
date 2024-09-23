"use strict";
// Function display each user
const prettyPrintWilder = (users) => {
    users.map((user) => {
        console.log(`${user.name} is ${user.age} years old`);
    });
};
// Init array wilders
const wilders = [];
// Create first user
const user1 = { name: "Pierre", age: 23 };
// Create second user
const user2 = { name: "Paul", birthday: "10/02/1990" };
// Create third user
const user3 = { name: "Jacques", age: 25 };
// Pushing all user into array
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
// Call function with arg (array)
prettyPrintWilder(wilders);
