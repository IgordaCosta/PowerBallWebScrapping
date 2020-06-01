const sqlite3 = require('sqlite3').verbose();


Database='sample.db'
TableName="New"

// function FixForTableNotExist (TableName,CreateTableMessage,Database){

exports.FixForTableNotExist = function (TableName,CreateTableMessage,Database){

    console.log(Database)

    let db = new sqlite3.Database(Database);

    db.get("SELECT name FROM sqlite_master WHERE type='table' AND name="+TableName, (err, boardTable)=> {
    if (boardTable === undefined) {
        db.run(CreateTableMessage)
        console.log("Fix for Table not exist ran")
    }else {
        console.log("Fix for Table Not Exist NOT RAN!!!")
        console.log(boardTable)
    }
    });
}