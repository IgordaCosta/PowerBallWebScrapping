const sqlite3 = require('sqlite3').verbose();

const path = require('path');

const GetTableColumnNames = require(path.resolve(__dirname, './GetTableColumnNames.js'))


const NoSuchTableFix = require(path.resolve(__dirname, './NoSuchTableFix.js'))

table=[ [ '2', '4', '7', '43', '56', '22' ],
        [ '1', '11', '21', '25', '54', '7' ],
        [ '49', '53', '57', '59', '62', '26']]



// passToSqlite(table)
// function passToSqlite (table){


exports.passToSqlite = function (table,DatabaseName){

Database='sample.db'

tableName=DatabaseName

let db = new sqlite3.Database(Database);



function DroptableFunction (dropTable,callback){
  db.run(dropTable)
  if (typeof callback == "function") 
              callback(); 
}



function CreateTableFunction (CreateTable,callback){
  db.run(CreateTable)
  if (typeof callback == "function") 
              callback(); 
}


function InputValuesFunction (FinalInsertValuesStatment,tableName,callback){
  db.run(FinalInsertValuesStatment)
  console.log("Table Used: ",tableName)
  console.log("done")
  if (typeof callback == "function") 
              callback(); 
}





  // console.log(table)


  // CreateTableColumns=[]
  // console.log(table[0].length)
  // for (let x=1;x<table[0].length+1;x++){
    
  //   value=" Number"+x+ ' text';
  //   console.log(value)

  //   if (x==table[0].length){
  //       CreateTableColumns.push('PowerBall text')
  //   }
  //   else{CreateTableColumns.push(value)}


  // }
  // console.log(CreateTableColumns)

  // ColumnsStringJoined=CreateTableColumns.join(', ')
  
  ColumnsStringJoined= GetTableColumnNames.GetColomnNames (table, 'PowerBall')

  dropTable='DROP TABLE IF EXISTS '+tableName

  //db.run(dropTable);


  CreateTable= "CREATE TABLE IF NOT EXISTS "+tableName+" ( DateOrder INTEGER PRIMARY KEY AUTOINCREMENT,"+ ColumnsStringJoined+" )"



  console.log(CreateTable)

  console.log("whole create datase comand above")
  
  // db.run(dropTable);
  // db.run(CreateTable);

  ColumnsStringJoinedNoText=ColumnsStringJoined.split("text").join("")
  console.log(ColumnsStringJoinedNoText)

  InsertStatement="INSERT INTO "+tableName+" ("+ColumnsStringJoinedNoText+")"
  console.log(InsertStatement)
  ValuesInitialStatemet="VALUES \n"
  console.log(ValuesInitialStatemet)

  WholeCreateTableValues=[]

  row=0
  CreateTableValues=[]

  console.log(table.length)
  console.log('table.length')

  ValuesStringJoined=[]
  WholeValues=[]
  for (let row=0; row<table.length;row++){
    
    CreateTableValues[row]=[]
    ValuesStringJoined[row]=[]
    WholeValues[row]=[]
  for (let x=0;x<table[row].length;x++){
    
    if (x==table[0].length){

      CreateTableValues[row].push(table[row][x]+" ]")   
    }
    else{

      CreateTableValues[row].push(table[row][x]) 
  }
  console.log(CreateTableValues[row]);
  ValuesStringJoined[row]=CreateTableValues[row].join(', ');
  console.log(ValuesStringJoined);
  WholeValues[row]="( "+ValuesStringJoined[row]+" )"
  console.log(WholeValues);
  }

  }
  WholeValuesPreFinal=WholeValues.join(',\n');
  console.log(WholeValuesPreFinal)
  FinalValuesStatment=ValuesInitialStatemet+WholeValuesPreFinal
  console.log(FinalValuesStatment)
  FinalInsertValuesStatment=InsertStatement+"\n"+FinalValuesStatment
  console.log(FinalInsertValuesStatment)

  // db.run(dropTable);
  // db.run(CreateTable);


  // Add fix for table here

 // NoSuchTableFix.FixForTableNotExist(TableName,CreateTable,Database)

  //console.log("Table Fix ran")


  const DroptablePromise = opts => {
    const promise = new Promise((resolve, reject) => {
        DroptableFunction (dropTable,
        success => {
          resolve(success);
        },
        error => {},
        opts
      );
    });
    return promise;
  };


  const CreateTablePromise = opts => {
    const promise = new Promise((resolve, reject) => {
        CreateTableFunction (CreateTable,
        success => {
          resolve(success);
        },
        error => {},
        opts
      );
    });
    return promise;
  };


  const InputValuesPromise = opts => {
    const promise = new Promise((resolve, reject) => {
        InputValuesFunction (FinalInsertValuesStatment,tableName,
        success => {
          resolve(success);
        },
        error => {},
        opts
      );
    });
    return promise;
  };




  DroptablePromise(dropTable).then(
    CreateTablePromise (CreateTable)).then(
      InputValuesPromise (FinalInsertValuesStatment,tableName))
        




  
      
        
  //db.run(CreateTable);

 // db.run(FinalInsertValuesStatment)

  // console.log("Table Used: ",tableName)
  // console.log("done")

 // db.close();

}


//passToSqlite(table)