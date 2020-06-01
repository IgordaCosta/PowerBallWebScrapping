const sqlite3 = require('sqlite3').verbose();

table=[ [ '2', '4', '7', '43', '56', '22' ],
        [ '1', '11', '21', '25', '54', '7' ],
        [ '49', '53', '57', '59', '62', '26']]


tablename="Old"

passToSqlite(table)
function passToSqlite (table){




//exports.passToSqlite = function (table){
  console.log(table)

  let db = new sqlite3.Database('sample.db');

  CreateTableColumns=[]
  console.log(table[0].length)
  for (let x=1;x<table[0].length+1;x++){
    
    value=" Number"+x+ ' text';
    console.log(value)

    if (x==table[0].length){
        CreateTableColumns.push('PowerBall text')
    }
    else{CreateTableColumns.push(value)}


  }
  console.log(CreateTableColumns)

  ColumnsStringJoined=CreateTableColumns.join(', ')

  dropTable='DROP TABLE IF EXISTS '+tablename

  CreateTable= "CREATE TABLE IF NOT EXISTS "+ tablename+ " ( DateOrder INTEGER PRIMARY KEY AUTOINCREMENT,"+ ColumnsStringJoined+" )"

  console.log(CreateTable)

  console.log("whole create datase comand above")
  
  db.run(dropTable);

  db.run(CreateTable);

  ColumnsStringJoinedNoText=ColumnsStringJoined.split("text").join("")
  console.log(ColumnsStringJoinedNoText)

  InsertStatement="INSERT INTO "+tablename+ " ("+ColumnsStringJoinedNoText+")"
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
  db.run(FinalInsertValuesStatment)

  db.close();

}


//passToSqlite(table)