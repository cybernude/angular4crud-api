'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Angular4 CRUD API Example' });
});
exports.default = router;
//# sourceMappingURL=index.js.map