"use strict";
var a = 0;
var b = "ABC";
function add1(num) {
    console.log(num + 1);
}
function log(str) {
    console.log(str);
}
add1(a);
log("The value of b is " + b);
var c = "2";
function log1(message) {
    return message;
}
var d = 2;
var msg = "the message is " + b + "; the end";
var arr = ['a', 'b', 'c'];
arr.push("xyz");
var tuple = [1, 'greg'];
var nbr = tuple[0];
var msg1 = tuple[1];
var errorCode;
(function (errorCode) {
    errorCode[errorCode["Ok"] = 1] = "Ok";
    errorCode[errorCode["Fail"] = -1] = "Fail";
})(errorCode || (errorCode = {}));
;
var error = errorCode.Ok;
var e = 2;
