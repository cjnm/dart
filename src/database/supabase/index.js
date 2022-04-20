"use strict";
exports.__esModule = true;
var SupabaseDatabaseServices = /** @class */ (function () {
    function SupabaseDatabaseServices() {
        this.save = function (file) {
            console.log('SupabaseDatabaseServices.save');
        };
        this.getURL = function (filename) {
            console.log('SupabaseDatabaseServices.getURL');
        };
    }
    return SupabaseDatabaseServices;
}());
exports["default"] = SupabaseDatabaseServices;
