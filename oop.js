"use strict";
var Employee = /** @class */ (function () {
    function Employee(fullName, perAge, jobTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log(_this._fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC \uC785\uB2C8\uB2E4.");
        };
        this._fullName = fullName;
        this.perAge = perAge;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('준모', 25, '주니어 웹 개발자', 40, 35);
console.log(employee1.fullName);
employee1.fullName = '헨리';
console.log(employee1.fullName);
employee1.fullName = '민수';
console.log(employee1.fullName);
employee1.printEmployeeDetails();
