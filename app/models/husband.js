"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HusbandModel {
    list(knex) {
        return knex('husband')
            .orderBy('husband_id', 'ASC');
    }
}
exports.HusbandModel = HusbandModel;
//# sourceMappingURL=husband.js.map