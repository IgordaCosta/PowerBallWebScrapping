


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
        InputValuesFunction (FinalInsertValuesStatment,
        success => {
          resolve(success);
        },
        error => {},
        opts
      );
    });
    return promise;
  };


  const PrintFunctionDonePromise = opts => {
    const promise = new Promise((resolve, reject) => {
        PrintFunctionDone (tableName,
        success => {
          resolve(success);
        },
        error => {},
        opts
      );
    });
    return promise;
  };









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


function InputValuesFunction (FinalInsertValuesStatment,callback){
    db.run(FinalInsertValuesStatment)
    if (typeof callback == "function") 
                callback(); 
}


function PrintFunctionDone (tableName,callback){
    console.log("Table Used: ",tableName)
    console.log("done")
    if (typeof callback == "function") 
                callback(); 
}

