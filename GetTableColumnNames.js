


table=[[1,2,3,4,5,6,7,8]]


lastColumName='PowerBall'

//Tablenames=GetColomnNames (table, lastColumName)
//console.log(Tablenames)


//function GetColomnNames (table, lastColumName){

exports.GetColomnNames = function (table, lastColumName){

    //console.log(table)

    //let db = new sqlite3.Database('sample.db');

    CreateTableColumns=[]
    console.log(table[0].length)
    for (let x=1;x<table[0].length+1;x++){
        
        value=" Number"+x+ ' text';
      //  console.log(value)

        if (x==table[0].length){
            CreateTableColumns.push(lastColumName+' text')
        }
        else{CreateTableColumns.push(value)}


    }
    //console.log(CreateTableColumns)

    ColumnsStringJoined=CreateTableColumns.join(', ')
    return(ColumnsStringJoined)

}

