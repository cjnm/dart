"use strict";
exports.__esModule = true;
var MySQLDatabaseServices = /** @class */ (function () {
    function MySQLDatabaseServices() {
        this.save = function (file) {
            console.log('MySQLDatabaseServices.save');
        };
        this.getURL = function (filename) {
            console.log('MySQLDatabaseServices.getURL');
        };
    }
    return MySQLDatabaseServices;
}());
exports["default"] = MySQLDatabaseServices;
