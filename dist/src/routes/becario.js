"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const becario_1 = require("../controllers/becario");
const router = (0, express_1.Router)();
router.get('/', becario_1.getBecarios);
exports.default = router;
