const sqlite3 = require('sqlite3').verbose();

const path = require('path');

const PowerBallWebScrape = require(path.resolve(__dirname, './PowerBallWebScrape.js'))

let db = new sqlite3.Database('sample.db');



const lastyear=[2020]

const otherYears=[2019,2018,2017,2016]

const OldDatabaseName="Old"

const NewDatabaseName="New"

const OldDatabase=[otherYears,OldDatabaseName]
const NewDatabase=[lastyear,NewDatabaseName]

//PowerBallWebScrape.GetDataFromSite(NewDatabase)

console.log(NewDatabase[0])





const PowerBallWebScrapePromise = opts => {
    const promise = new Promise((resolve, reject) => {
        PowerBallWebScrapeFunction (DataBaseType,
        success => {
          resolve(success);
        },
        error => {},
        opts
      );
    });
    return promise;
  };



  function PowerBallWebScrapeFunction (DataBaseType,callback){

    console.log(DataBaseType)
    
    PowerBallWebScrape.GetDataFromSite(DataBaseType)
    if (typeof callback == "function") 
                callback(); 
}

console.log(NewDatabase)
PowerBallWebScrapePromise(NewDatabase).catch(err => {console.log(err);return 'on we go...'})


