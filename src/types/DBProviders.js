"use strict";
exports.__esModule = true;
var DBProviders;
(function (DBProviders) {
    DBProviders[DBProviders["mysql"] = 0] = "mysql";
    DBProviders[DBProviders["supabase"] = 1] = "supabase";
})(DBProviders || (DBProviders = {}));
exports["default"] = DBProviders;
