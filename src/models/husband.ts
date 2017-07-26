"use strict";
import Knex = require('knex');
// import * as moment from 'moment';

export class HusbandModel {
    list(knex: Knex) {
        return knex('husband')
            .orderBy('husband_id', 'ASC');
    }

  listRaw(knex: Knex) {
    let sql = ` 
        select * from husband order by husband_id asc
       `;
    return knex.raw(sql);
  }

}



// exports.HusbandModel = HusbandModel;
