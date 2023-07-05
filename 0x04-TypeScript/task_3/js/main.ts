/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface.ts';
import * as CRUD from 'crud.js';

let row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
    ...row,
    age: 23
};

CRUD.updateRow(newRowID, updatedRow)
CRUD.deleteRow(newRowID)

// output
// Insert row {firstName: "Guillaume", lastName: "Salva"}
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}
