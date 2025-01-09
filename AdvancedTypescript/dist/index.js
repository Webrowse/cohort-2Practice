"use strict";
function sunOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sunOfAge({
    name: "Adarsh",
    age: 25
}, {
    name: "Romy",
    age: 22
});
console.log(age);
