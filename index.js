"use strict";
exports.__esModule = true;
var DBProviders_1 = require("./src/types/DBProviders");
var StorageProviders_1 = require("./src/types/StorageProviders");
var database_1 = require("./src/database");
var file_storage_1 = require("./src/file_storage");
var FileSDK = /** @class */ (function () {
    function FileSDK(config) {
        var _this = this;
        this.upload = function (file) {
            _this.db.save(file);
            _this.storage.upload(file);
        };
        this.download = function (filename) {
            _this.db.getURL(filename);
        };
        var dbProvider = config.dbProvider, storageProvider = config.storageProvider;
        // if (!dbProvider || !storageProvider) {
        //   throw new Error('Initalization error.');
        // }
        this.db = new database_1["default"](dbProvider);
        this.storage = new file_storage_1["default"](storageProvider);
    }
    return FileSDK;
}());
exports["default"] = FileSDK;
console.log('start');
var x = new FileSDK({ dbProvider: DBProviders_1["default"].supabase, storageProvider: StorageProviders_1["default"].s3 });
x.download('xxy apple');
x.upload('xxz ball');
