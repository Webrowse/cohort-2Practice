interface User {
    name: string;
    age: number;
}

function sunOfAge(user1: User, user2: User){
    return user1.age + user2.age;
}

const age = sunOfAge(
    {
        name: "Adarsh",
        age: 25
    },
    {
        name: "Romy",
        age: 22
    })

    console.log(age);