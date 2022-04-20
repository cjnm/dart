"use strict";
exports.__esModule = true;
var StorageProviders_1 = require("../types/StorageProviders");
var s3_1 = require("./s3");
var supabase_1 = require("./supabase");
var StorageProvider = /** @class */ (function () {
    function StorageProvider(storageProvider) {
        // if (!storageProvider) {
        //   throw new Error('Initalization error.');
        // }
        var _this = this;
        this.upload = function (file) {
            _this._storageProvider.upload(file);
        };
        if (storageProvider === StorageProviders_1["default"].supabase) {
            this._storageProvider = new supabase_1["default"]();
        }
        else if (storageProvider === StorageProviders_1["default"].s3) {
            this._storageProvider = new s3_1["default"]();
        }
    }
    return StorageProvider;
}());
exports["default"] = StorageProvider;
