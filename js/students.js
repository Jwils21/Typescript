"use strict";
var Student = /** @class */ (function () {
    function Student(name, sat, active) {
        if (sat === void 0) { sat = 1200; }
        if (active === void 0) { active = true; }
        this.Id = 0;
        this.Name = name;
        this.SAT = sat;
        this.Active = active;
    }
    Student.prototype.log = function () {
        var msg = this.Id + "," + this.Name + "," + this.SAT + "," + this.Active + ",";
        console.log(msg);
    };
    return Student;
}());
var s1 = new Student("Jon", 900);
var s2 = new Student("Perry");
s1.log();
s2.log();
