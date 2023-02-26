"use strict";
exports.__esModule = true;
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
//Function add numbers
// type numbers
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
//default values can be defined for a function params as it is done for str2 in the next line
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
//a function that returns a function
// union type of different data types
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// void function is a function that does not return anything
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
//specifying a promise
var fetchData = function (url) {
    //@ts-ignore
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// taking multiple arguments and coarsing it to an array
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
}
exports.getName = getName;
