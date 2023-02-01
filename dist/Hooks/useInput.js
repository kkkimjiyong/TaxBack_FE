"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useInput = function (initialState) {
    //초기 밸류값 설정
    var _a = (0, react_1.useState)(initialState), initialvalue = _a[0], Setinitialvalue = _a[1];
    //핸들러로직구현
    var onChangehandler = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        Setinitialvalue(__assign(__assign({}, initialvalue), (_a = {}, _a[name] = value, _a)));
        console.log(initialvalue);
    };
    return [initialvalue, Setinitialvalue, onChangehandler];
};
exports.default = useInput;
