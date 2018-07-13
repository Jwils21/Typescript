"use strict";
var Friends = /** @class */ (function () {
    function Friends(Name, YrsKnown, CityState) {
        this.Id = Friends.nextId++;
        this.Name = Name;
        this.YrsKnown = YrsKnown;
        this.CityState = CityState;
    }
    Friends.prototype.print = function () {
        console.log(this.Id + ", " + this.Name + ", " + this.YrsKnown + ", " + this.CityState);
    };
    Friends.nextId = 0;
    return Friends;
}());
var f1 = new Friends("Connor", 13, "Logandale NV");
var f2 = new Friends("Cole", 15, "Overton NV");
var f3 = new Friends("Dave", 26, "Las Vegas NV");
var f4 = new Friends("James", 15, "Yuma AZ");
var f5 = new Friends("Tyler", 0, "Cincinnati OH");
var f6 = new Friends("Brailee", 0, "Cincinnati OH");
var FrArr = [];
FrArr.push(f1);
FrArr.push(f2);
FrArr.push(f3);
FrArr.push(f4);
FrArr.push(f5);
FrArr.push(f6);
for (var _i = 0, FrArr_1 = FrArr; _i < FrArr_1.length; _i++) {
    var friend = FrArr_1[_i];
    friend.print();
}
