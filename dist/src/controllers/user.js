"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const newUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "New user",
        body
    });
};
exports.newUser = newUser;
const loginUser = (req, Res) => {
    const { body } = req;
    Res.json({
        msg: "login user",
        body
    });
};
exports.loginUser = loginUser;
