"use strict";
//* Awaited<T>
//example 1
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Hello");
    }, 1000);
});
//example 2
async function example() {
    const response = new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
        }, 1000);
    });
    const data = await response;
    console.log(typeof data);
}
example();
const article = {
    title: "dja gerigtrgf erge",
    content: "ierhrgenr roih freigae reag reg erg efwdgy  dfgehg",
    contributors: {
        author: { name: "John", email: "John@email.com", age: 32 },
        editor: { name: "Rohit", email: "rohit@email.com", age: 21 },
        researcher: { name: "Pavan", email: "pavan@email.com", age: 23 }
    }
};
const person = {
    name: "Dikshant",
    age: 23
};
//* Partial<Type>
function updateUser(user, updates) {
    return { ...user, ...updates };
}
// lets test it
const p1 = {
    name: "dikshant",
    age: 21,
    email: "dikshant@email.com",
    password: 'tfdsghtrffgrt',
    passwordConfirm: 'tfdsghtrffgrt',
    _id: "23retdf3rev"
};
const updatedP1 = updateUser(p1, { name: "Dikshant Sharma" });
console.log(updatedP1);
/*
const color: Record<Properties, RGB | string> = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [255, 255, 0]
}

color.green.toLowerCase();  //* this will throw error

if (typeof color.green === "string") {  //* this will not throw error
    color.green.toUpperCase();
}

*/
//* but if we strict type color using satisfies operator then it will automatically checks all properties of color whether it is of type RGB or string
const color = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [255, 255, 0]
};
color.green.toLocaleLowerCase(); // now this will not throw error
//# sourceMappingURL=app.js.map