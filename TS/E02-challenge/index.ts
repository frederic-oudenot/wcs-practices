// interface User
interface User {
  name: string;
  age?: number;
  birthday?: string;
}

// Function display each user
const prettyPrintWilder = (users: User[]) : void => {
  users.map((user:User) => {
    console.log(`${user.name} is ${user.age} years old`);
  });
};

// Init array wilders
const wilders: User[] = [];

// Create first user
const user1: User = { name: "Pierre", age: 23 };
// Create second user
const user2: User = { name: "Paul", birthday: "10/02/1990" };
// Create third user
const user3: User = { name: "Jacques", age: 25 };

// Pushing all user into array
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);

// Call function with arg (array)
prettyPrintWilder(wilders);
