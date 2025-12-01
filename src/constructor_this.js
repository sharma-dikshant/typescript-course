class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.point = 0;
    }

    login() {
        console.log(`${this.name} logged in!`)
    }

    logout() {
        console.log(`${this.name} logged out!`)
    }

    addPoint() {
        this.point++;
        console.log(`total points : ${this.point}`)
    }
}


const user = new User('testUser', 'test@email.com')
// console.log(user)


/** CONTRUCTOR FUNCTION */

function User2(name, email) {
    this.name = name;
    this.email = email;
    this.point = 0;

    this.login = () => {
        console.log(`${this.name} logged in!`)
    }

    this.logout = () => {
        console.log(`${this.name} logged out!`)
    }

    this.addPoints = () => {
        this.point++;
        console.log(`total points : ${this.point}`)
    }
}

const user2 = new User2('testUser2', 'test2@email.com')

console.log(user2)