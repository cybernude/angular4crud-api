'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const procedure_1 = require("../models/procedure");
const router = express.Router();
const procedureModel = new procedure_1.ProcedureModel();
router.get('/:startdate/:enddate', (req, res, next) => {
    let db = req.db;
    let startdate = req.params.startdate;
    let enddate = req.params.enddate;
    procedureModel.getProcedure(db, startdate, enddate)
        .then((results) => {
        res.send({ ok: true, rows: results[0] });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
router.post('/', (req, res, next) => {
    let db = req.db;
    let startdate = req.body.startdate;
    let enddate = req.body.enddate;
    procedureModel.getProcedure(db, startdate, enddate)
        .then((results) => {
        res.send({ ok: true, rows: results[0] });
    })
        .catch(error => {
        res.send({ ok: false, error: error });
    })
        .finally(() => {
        db.destroy();
    });
});
exports.default = router;
//# sourceMappingURL=procedure.js.map