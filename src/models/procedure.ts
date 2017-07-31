"use strict";
import Knex = require('knex');
// import * as moment from 'moment';

export class ProcedureModel {
    getProcedure(knex: Knex, startdate :string , enddate: string) {
    let sql = ` 
SELECT
    oprt.icd9cm as prcd,
    oprt.icd9name as nameprcd,
    count(DISTINCT(case when TIME(ovst.vstdttm) between '08:00:01' and '16:00:00' then ovst.hn end)) as m_hn,
    count(case when TIME(ovst.vstdttm) between '08:00:01' and '16:00:00' then ovst.vn end) as m_visit,
    count(DISTINCT(case when TIME(ovst.vstdttm) between '16:00:01' and '23:59:59' then ovst.hn end)) as b_hn,
    count(case when TIME(ovst.vstdttm) between '16:00:01' and '23:59:59' then ovst.vn end) as b_visit,
    count(DISTINCT(case when TIME(ovst.vstdttm) between '00:00:00' and '08:00:00' then ovst.hn end)) as d_hn,
    count(case when TIME(ovst.vstdttm) between '00:00:00' and '08:00:00' then ovst.vn end) as d_visit,
    count(DISTINCT(case when TIME(ovst.vstdttm) between '00:00:00' and '24:00:00' then ovst.hn end)) as all_hn,
    count(case when TIME(ovst.vstdttm) between '00:00:00' and '24:00:00' then ovst.vn end) as all_visit
    FROM
    pt
    INNER JOIN ovst ON ovst.hn = pt.hn
    INNER JOIN cln ON cln.cln = ovst.cln
    inner join oprt on oprt.vn = ovst.vn
    WHERE date(ovst.vstdttm) BETWEEN ? and ?
    GROUP BY oprt.icd9name
           `;
    return knex.raw(sql,[startdate,enddate]);
  }


}
