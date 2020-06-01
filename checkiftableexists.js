const sqlite3 = require('sqlite3').verbose();

//const sqliteInputTable = require('./PowerBallWebScrape')

const path = require('path');

const PowerBallWebScrape = require(path.resolve(__dirname, './PowerBallWebScrape.js'))

var Async = require(path.resolve(__dirname, './simplify-async.js')).simpleAsync;


let db = new sqlite3.Database('sample.db');

//TableExists=false


lastyear=[2020]

otherYears=[2019,2018,2017,2016]

OldDatabaseName="Old"

NewDatabaseName="New"

OldDatabase=[otherYears,OldDatabaseName]
NewDatabase=[lastyear,NewDatabaseName]

StartALL()
function StartALL  (){
TableExists=db.get("SELECT name FROM sqlite_master WHERE type='table' AND name="+"'"+OldDatabaseName+"'", function(error, row) {
    let TableExists =false
		if (row !== undefined) {
            console.log("table exists");
            //console.log(row)
            TableExists=true
            let TableComplete=false
            

            
        


            TableExistsFunction(function (complete){console.log(complete)})

            setTimeout(() => {
        promise.resolve("Have nice day");
        }, 5000);



            // TableComplete=PowerBallWebScrape.GetDataFromSite(NewDatabase).then(function(TableComplete){
            //     console.log("This year data colected")
            //     TableComplete=PowerBallWebScrape.GetDataFromSite(OldDatabase)})
            // if(TableComplete){
            //     TableComplete=false
            //     console.log("This year data colected")
            //     TableComplete=PowerBallWebScrape.GetDataFromSite(OldDatabase)}
            // if(TableComplete){
            //     console.log("All Data Collected")}
            

		}
		else {
			console.log("Table does not Exist")
            TableExists=false
            TableNOTExistsFunction().then(function() {
                TableNOTExistsFunction()}    )
            };
            
            console.log("table exists:", TableExists)
        });

    }

    //async function TableNOTExistsFunction(){
    function TableNOTExistsFunction(){
        //await TableExistsFunction()
        

        console.log("Table Exist Function Initiated")
        PowerBallWebScrape.GetDataFromSite(OldDatabase)
        console.log("All data colected")

        

        //Pause(5,TableExistsFunction)

        // PowerBallWebScrape.GetDataFromSite(OldDatabase)
        // console.log("This year data colected")

        // PowerBallWebScrape.GetDataFromSite(OldDatabase)
        // console.log("All Data Collected")


    }
    //async function TableExistsFunction(){
    function TableExistsFunction(){
        console.log(NewDatabase)
        return PowerBallWebScrape.GetDataFromSite(NewDatabase)
        //console.log("This year data colected")

       




       


    }



    function TableExistsFunction(callback) {
        PowerBallWebScrape.GetDataFromSite(NewDatabase)
        callback(‘You have successfully LoggedIn’);
       }
    TableExistsFunction(function(result) {
        console.log(result);
       });


    function Pause(Time,FuncName){
        setTimeout(FuncName,Time*1000);
    }
