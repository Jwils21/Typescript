"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(description) {
        this.id = ++Account.nextId;
        this.description = description;
        this.balance = 0;
    }
    Object.defineProperty(Account.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withdrawal = function (amount) {
        this.balance -= amount;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.nextId = 0;
    return Account;
}());
var Savings = /** @class */ (function (_super) {
    __extends(Savings, _super);
    function Savings(id, description, intRate) {
        if (intRate === void 0) { intRate = 0.01; }
        var _this = _super.call(this, id, description) || this;
        _this.intRate = intRate;
        return _this;
    }
    Savings.prototype.calcInterest = function () {
        var interest = this.balance * this.intRate;
        this.deposit(interest);
    };
    return Savings;
}(Account));
var sav1 = new Savings(0, 'savings account', 0.02);
console.log(sav1.getBalance());
sav1.deposit(100);
console.log(sav1.getBalance());
sav1.withdrawal(50);
console.log(sav1.getBalance());
sav1.calcInterest();
console.log(sav1.getBalance());
