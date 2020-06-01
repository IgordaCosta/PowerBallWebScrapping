const chromeOptions = require('selenium-webdriver/chrome');
var webdriver = require ('selenium-webdriver') , // including webdriver
 By = webdriver.By; //obj have properties -> id xpath className name
var chrome = require('chromedriver'); //requiring chrome driver which we installed using NPM command
var driver = new webdriver.Builder() //driver provide interaction with hardware
 .forBrowser('chrome') //mentioning the browser.
 .setChromeOptions(new chromeOptions.Options().headless())//work in background
 .build();// Opening our browser
 fs = require('fs');

const sqliteInputTable = require('./sqliteInputTable')

lastyear=[2020]

otherYears=[2019,2018,2017,2016]

OldDatabaseName="Old"

NewDatabaseName="New"

OldDatabase=[otherYears,OldDatabaseName]
NewDatabase=[lastyear,NewDatabaseName]
// yearList=[2016,2017,2018,2019]
GetDataFromSite(OldDatabase)

//exports.GetDataFromSite = function (yearList){
function GetDataFromSite(DataBaseType){


yearList=DataBaseType[0]
//amount of columns,
//can be set differently for different tables
const columnValue=7

//array cut size for slicing
const columnValuefirst=columnValue-1

//constant values should not be alterred
let column=1
let row = 1

let yearIndex=0

//arrays initiated
let ArrayofResults=[]
let FinalArray=[]
let JoinedArray=[]

StartUpdate()

function StartUpdate(){
  

  driver.get('https://www.national-lottery.com/powerball/results-archive-'+yearList[yearIndex].toString()); //getting the URL
 var count = 0, length = 0;
 results ={
   arrayLang : [],
   arrayIndex: [],
 }, finalData = '';

 console.log("it started");
 
 Pause(10,GetRowValue);

  
}
 
//amount of columns,
//can be set differently for different tables
//const columnValue=7

//array cut size for slicing
//const columnValuefirst=columnValue-1

//constant values should not be alterred
//let column=1
//let row = 1

//Pause(10,GetRowValue);

//arrays initiated
//let ArrayofResults=[]
//let FinalArray=[]

function GetRowValue(){

    driver.findElements(By.xpath('//*[@id="content"]/table/tbody/tr['+row+']/td[2]/span['+1+']')).then(function(elements){

        size=elements.length
        console.log("size",size);
        if (size >0){

            console.log("continue");
            row++
            GetRowValue()

    }else{

        row--
        console.log("stop");
        console.log('row',row)
        MaxRow=row+1
        row=1
        Pause(1,GetColumnValue)

        }
    })
}

function GetColumnValue(){

    console.log("Maxrow amount in new function", MaxRow)
    for (var row = 1; row < MaxRow; row++) {
      console.log('row: ',row)
      console.log('MaxRow: ',MaxRow)
        
          for (var column = 1; column < columnValue; column++) {
              console.log('column: ',column)
              console.log('columnValue: ',columnValue)
            

              driver.findElement(By.xpath('//*[@id="content"]/table/tbody/tr['+row+']/td[2]/span['+column+']')).then(function(body){
      
                  body.getText().then(function(bodyText){
  
                      ArrayofResults.push(bodyText)
         
                      if ((row-1)*(column-1)==ArrayofResults.length){

                      console.log("will print bellow")
                      Pause(3,PrintValue)
                    }
              })
              })
          }
      }
  }

  function PrintValue(){
    console.log(ArrayofResults)
  for (var value = 0 ;value < ArrayofResults.length;value+=columnValue-1){

    indexUsed=value/(columnValue-1)
    FinalArray[indexUsed]=[]
    FinalArray[indexUsed]=ArrayofResults.slice(value,columnValuefirst+value)

  }

  console.log(FinalArray)
  //JoinedArray.push(FinalArray)
  JoinedArray=JoinedArray.concat(FinalArray)
  
  console.log(JoinedArray)
  
  console.log(yearIndex+1)
  console.log(yearList.length)
  if (yearIndex+1==yearList.length){

    sqliteInputTable.passToSqlite(JoinedArray);

    //sqliteInputTable.passToSqlite(JoinedArray);
    console.log("done")

  }else{
    yearIndex++
    console.log("go again")
    column=1
    row = 1
    ArrayofResults=[]
    FinalArray=[]
    StartUpdate()
  }
  

  }

    

/**
 * Scrapping the page for the demonstration of various selenium elements and methods
 */
/**
adding seleinum wait
 * Delay in seconds
 * @param int time
 * @param function func
 */
function Pause(Time,FuncName){
  setTimeout(FuncName,Time*1000);
}

/**
* Closing and then quiting the driver after scrapping has been done
*/
function QuitDriver(){
  driver.close();
  driver.quit();
}
}


//sqliteInputTable.passToSqlite(JoinedArray);