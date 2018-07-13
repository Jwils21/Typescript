class Employee{
    Id: number;
    Name: string;
    Active: boolean;

    constructor(Id: number, Name: string, Active: boolean = true) {
        this.Id = Id;
        this.Name = Name;
        this.Active = Active;
    }

    print(): void {
        let msg = `${this.Id},${this.Name},${this.Active}`;
        console.log(msg);
    }

}

let e1: Employee = new Employee(0,"Jon",true);
let e2: Employee = new Employee(1,"Greg",true);
let e3: Employee = new Employee(2,"Erin",false);
let e4: Employee = new Employee(3,"Michael",false);
let e5: Employee = new Employee(4,"Jerry",false);

//array of employees
let employees: Employee[] = [];
employees.push(e1);
employees.push(e2);
employees.push(e3);
employees.push(e4);
employees.push(e5);


//for loop through emps
for(let employee of employees) {
    //print out employees
    employee.print();
}
