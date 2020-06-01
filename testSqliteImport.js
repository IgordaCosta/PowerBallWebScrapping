//import { passToSqlite } from './sqliteInputTable.js';

//import { passToSqlite } from './sqliteInputTable.js';

//const circle = require('./sqliteInputTable');


const sqliteInputTable = require('./sqliteInputTable')


table=[ [ '2', '4', '7', '43', '56', '22' ],
        [ '1', '11', '21', '25', '54', '7' ],
        [ '49', '53', '57', '59', '62', '26']]

sqliteInputTable.passToSqlite(table);
//passToSqlite(table)