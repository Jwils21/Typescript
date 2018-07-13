class Student {
    Id: number;
    Name: string;
    SAT: number;
    Active: boolean

    constructor(name: string, sat: number = 1200, active: boolean = true) {
        this.Id=0;
        this.Name = name;
        this.SAT = sat;
        this.Active = active;
    }

    log(): void{
        let msg: string = `${this.Id},${this.Name},${this.SAT},${this.Active},`
        console.log(msg);
    }
}

let s1: Student = new Student("Jon",900);
let s2: Student = new Student("Perry");

s1.log();
s2.log();