let a: number = 0;
let b: string = "ABC";

function add1(num: number): void {
    console.log(num+1);
}

function log(str: string) : void {
    console.log(str);
}

add1(a);

log(`The value of b is ${b}`)


var c: string = "2";

function log1(message: string): string {
    return message
}

let d = 2;

let msg: string = `the message is ${b}; the end`;

let arr: String[] = ['a', 'b', 'c'];
arr.push("xyz");

let tuple: [number, string] = [1, 'greg'];
let nbr: number = tuple[0];
let msg1: string = tuple[1];

enum errorCode { Ok = 1, Fail = -1 };
let error: errorCode = errorCode.Ok;

let e: any = 2;