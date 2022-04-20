"use strict";
exports.__esModule = true;
var StorageProviders;
(function (StorageProviders) {
    StorageProviders[StorageProviders["s3"] = 0] = "s3";
    StorageProviders[StorageProviders["supabase"] = 1] = "supabase";
})(StorageProviders || (StorageProviders = {}));
exports["default"] = StorageProviders;
