"use strict";
var Employee = /** @class */ (function () {
    function Employee(Id, Name, Active) {
        if (Active === void 0) { Active = true; }
        this.Id = Id;
        this.Name = Name;
        this.Active = Active;
    }
    Employee.prototype.print = function () {
        var msg = this.Id + "," + this.Name + "," + this.Active;
        console.log(msg);
    };
    return Employee;
}());
var e1 = new Employee(0, "Jon", true);
var e2 = new Employee(1, "Greg", true);
var e3 = new Employee(2, "Erin", false);
var e4 = new Employee(3, "Michael", false);
var e5 = new Employee(4, "Jerry", false);
//array of employees
var employees = [];
employees.push(e1);
employees.push(e2);
employees.push(e3);
employees.push(e4);
employees.push(e5);
//for loop through emps
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    //print out employees
    employee.print();
}
