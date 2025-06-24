import {MathUtils} from './utils/mathUtils.js'
import {StringUtils} from './utils/stringUtils.js'
import {Student} from './utils/Student.interface'

import handler = require('./utils/handler.js')

let x = MathUtils.add(1, 3);
let y = StringUtils.add("refdgt", "ergh")

let s: Student = {
    name: "Dikshant",
    age: 20,
    email: "hello@email.com"
};

console.log(s)
console.log(x, y)