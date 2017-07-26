"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HusbandModel {
    list(knex) {
        return knex('husband')
            .orderBy('husband_id', 'ASC');
    }
    listRaw(knex) {
        let sql = ` 
        select * from husband order by husband_id asc
       `;
        return knex.raw(sql);
    }
}
exports.HusbandModel = HusbandModel;
//# sourceMappingURL=husband.js.map