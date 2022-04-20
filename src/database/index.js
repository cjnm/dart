"use strict";
exports.__esModule = true;
var DBProviders_1 = require("../types/DBProviders");
var supabase_1 = require("./supabase");
var mysql_1 = require("./mysql");
var DBProvider = /** @class */ (function () {
    function DBProvider(dbProvider) {
        // if (!dbProvider) {
        //   throw new Error('Initalization error.');
        // }
        var _this = this;
        this.save = function (file) {
            _this._dbProvider.save(file);
        };
        this.getURL = function (filename) {
            _this._dbProvider.getURL(filename);
        };
        if (dbProvider === DBProviders_1["default"].supabase) {
            this._dbProvider = new supabase_1["default"]();
        }
        else if (dbProvider === DBProviders_1["default"].mysql) {
            this._dbProvider = new mysql_1["default"]();
        }
    }
    return DBProvider;
}());
exports["default"] = DBProvider;
