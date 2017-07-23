'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const husband_1 = require("../models/husband");
const router = express.Router();
const husbanModel = new husband_1.HusbandModel();
router.get('/', (req, res, next) => {
    console.log("into route");
    let db = req.db;
    husbanModel.list(db)
        .then((results) => {
        res.send({ ok: true, rows: results });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
exports.default = router;
//# sourceMappingURL=husband.js.map