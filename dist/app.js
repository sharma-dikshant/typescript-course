"use strict";
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
    function subtract(a, b) {
        return a + b;
    }
    MathUtils.subtract = subtract;
})(MathUtils || (MathUtils = {}));
var StringUtils;
(function (StringUtils) {
    function add(a, b) {
        return a + b;
    }
    StringUtils.add = add;
    function subtract(a, b) {
        return a.replace(b, '');
    }
    StringUtils.subtract = subtract;
})(StringUtils || (StringUtils = {}));
/// <reference path="./utils/mathUtils.ts"/>
/// <reference path="./utils/stringUtils.ts"/>
let x = MathUtils.add(1, 3);
let y = StringUtils.add("refdgt", "ergh");
//# sourceMappingURL=app.js.map