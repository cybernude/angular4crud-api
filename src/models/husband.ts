"use strict";
import Knex = require('knex');
// import * as moment from 'moment';

export class HusbandModel {
    list(knex: Knex) {
        return knex('husband')
            .orderBy('husband_id', 'ASC');
    }

}

// exports.HusbandModel = HusbandModel;
