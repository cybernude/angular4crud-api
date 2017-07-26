'use strict';

import * as express from 'express';

import { HusbandModel } from '../models/husband';

const router = express.Router();

const husbanModel = new HusbandModel();

router.get('/', (req, res, next) => {
console.log("into route");
  let db = req.db;

  husbanModel.list(db)
    .then((results: any) => {
      res.send({ ok: true, rows: results });
    })
    .catch(error => {
      res.send({ ok: false, error: error })
    })
    .finally(() => {
      db.destroy();
    });
});


router.get('/raw', (req, res, next) => {
console.log("into route");
  let db = req.db;

  husbanModel.list(db)
    .then((results: any) => {
      res.send({ ok: true, rows: results });
    })
    .catch(error => {
      res.send({ ok: false, error: error })
    })
    .finally(() => {
      db.destroy();
    });
});

router.get('/raw2', (req, res, next) => {
console.log("into route");
  let db = req.db;

  husbanModel.list(db)
    .then((results: any) => {
      res.send({ ok: true, rows: results });
    })
    .catch(error => {
      res.send({ ok: false, error: error })
    })
    .finally(() => {
      db.destroy();
    });
});
export default router;