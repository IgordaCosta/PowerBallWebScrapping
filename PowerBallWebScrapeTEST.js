const chromeOptions = require('selenium-webdriver/chrome');
var webdriver = require ('selenium-webdriver') , // including webdriver
 By = webdriver.By; //obj have properties -> id xpath className name
var chrome = require('chromedriver'); //requiring chrome driver which we installed using NPM command
var driver = new webdriver.Builder() //driver provide interaction with hardware
 .forBrowser('chrome') //mentioning the browser.
 .setChromeOptions(new chromeOptions.Options().headless())//work in background
 .build();// Opening our browser
 fs = require('fs');

  year=2019

  driver.get('https://www.national-lottery.com/powerball/results-archive-'+year.toString()); //getting the URL
 var count = 0, length = 0;
 results ={
   arrayLang : [],
   arrayIndex: [],
 }, finalData = '';

 //console.log(driver);
 console.log("it started");
  /**
   * Calls the method after 4 seconds of delay.
   */

ArrayofResults=[]

rowValue=10



columnValue=7
columnValuefirst=columnValue-1

row=0




Pause(10,GetRowValue);
newLimit=false
column=1
rowMax=5
row = 1

function FunctionChecked(column){
    text=driver.findElement(By.xpath('//*[@id="content"]/table/tbody/tr['+column+']/td[2]/span['+1+']')).size()
    return text
}
function GetRowValue(){
    
    //let table = driver.findElement(By.xpath('//*[@id="content"]/table/tbody/tr['+10+']/td[2]/span['+1+']'));
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
        MaxRow=row
        Pause(1,GetColumnValue)
}
    })
}

function GetColumnValue(){

    console.log("Maxrow amount in new function", MaxRow)

}

    //if(amount > 0){
       // console.log("element found")
   // }
        // element exists
    //else{
       // console.log("element NOT found")
       // console.log(amount)
    
    
        // element doesn't exist



    
            //try{FunctionChecked(10);}
           // catch(e) {console.log(e)}
                //driver.findElement(By.xpath('//*[@id="content"]/table/tbody/tr['+row+']/td[2]/span['+column+']')).catch((e) => console.log('err: ' + e))
                

                        
                    
                
            
            
        
    
  
    //let GetOutofLoop = 0
   // for (var row2 = 1; row2 < rowValue; row2++) {
    //  row++
    //  console.log(GetOutofLoop)
     // if (GetOutofLoop==1){console.log("get out loop");
     // break}
        
      //  for (var column = 1; column < columnValue; column++) {
      //      console.log(GetOutofLoop)
      //      if (GetOutofLoop==1){console.log("get out loop");
       //         } else{
       //     driver.findElement(By.xpath('//*[@id="content"]/table/tbody/tr['+row+']/td[2]/span['+column+']')).then(function(body){
           //     body.getText().then(function(bodyText){
          //          ArrayofResults.push(bodyText)})
          //      }).catch(function(e) {console.log(e); 
          //      console.log("will print bellow");
          //      GetOutofLoop=1
                

           //     Pause(1,PrintValue);
                
         //   })
      //  }
  //  }

  //  }
//}


            //driver.findElement(By.xpath('//*[@id="content"]/table/tbody/tr['+row+']/td[2]/span['+column+']')).then(function(body){
    
              //  body.getText().then(function(bodyText){

                //    ArrayofResults.push(bodyText)
                    //console.log(ArrayofResults)
                    //console.log(ArrayofResults.length)
                    //console.log('ArrayofResults.length')
                    //console.log(row)
                    //console.log(column)
                    //console.log((row-1)*(column-1))

                 //   if ((row-1)*(column-1)==ArrayofResults.length){
                    //console.log(ArrayofResults)
                  //  console.log("will print bellow")
                 //   Pause(1,PrintValue)
                 // }
                    
                    

                    //Pause(1,PrintResults)
                

          //  })
            
            
         //   })

            

            
            
       // }
        
        
  //  }
    
//}
FinalArray=[]
function PrintValue(){
console.log(ArrayofResults)
//for (var value = 0 ;value < ArrayofResults.length;value+=columnValue-1){
  //indexUsed=value/(columnValue-1)
  //console.log(indexUsed)
  //FinalArray[indexUsed]=[]


 // FinalArray[indexUsed]=ArrayofResults.slice(value,columnValuefirst+value)

//}
//console.log(FinalArray)

}

/**
 * Gets the lang id and save into results.arrayIndex
 */

/* 
function GetId(){
  var ids = '';
  Pause(1,function(){
    if(count != 106){
      //script for getting languge id
      driver.findElement(By.xpath('//div[@class="language-list-unfiltered-langs-tl_list"]/div[2]/div['+(count)+']')).getAttribute('class').then(function(id){
        console.log(id);
        if(typeof id.split('-')[1] != 'undefined' && typeof id.split('-')[2] != 'undefined'){
          ids = id.split('-')[1] + "-" + id.split('-')[2]; // Chineses lang where we have 2 -
        }else {
          ids = id.split('-')[1]; // For all the languages
        }
        var finalId = ids.replace('item-selected','');
        console.log(finalId);
        results.arrayIndex.push(finalId);
        count++;
        GetId();
      });
    }else {
      count = 0;
      Pause(1,GetLanguageRelatedToId);
    }

  });

  */
  /**
 * Gets the language related to id that generates in above method
 * Saves that lang into results.arrayLang
 */
/*
}
function GetLanguageRelatedToId(){
  if (count != results.arrayIndex.length ) {
    Pause(1,function(){
      driver.findElement(By.xpath('//div[@class="language_list_item_wrapper language_list_item_wrapper-'+results.arrayIndex[count]+'"]/div[2]')).getText().then(function(txt){
        if (txt=='') {                    //it means, we have a default language text i.e English
          results.arrayLang.push('English');
        }else {                          // Pushing rest languages
          results.arrayLang.push(txt);
        }
        console.log(txt);
        count ++;
        GetLanguageRelatedToId();
      });

    });

  }else{
   Pause(2,AppendToArray);
  }
}
*/

/**
 * Appends the data to languages array based on lang : id pair
 * Finally saves that data to finalData array
 */

 /*
function AppendToArray(){
  var languages = {}, lang ='',id = '';
  for (var i = 0; i < results.arrayIndex.length; i++) {
    lang = results.arrayLang[i];
    id   = results.arrayIndex[i];
    languages[lang.toLowerCase()] = id;
  }
  finalData = "exports.languages = ["+JSON.stringify(languages)+"];"
  Pause(1,CheckFileExistance);
}

*/
/**
 * Deletes the file languages.js file if it exists before.
*/
/*
function CheckFileExistance(){
fs.stat('languges.js',function(err,stats){
  if (!err) {
    //delete the file if it exists
    fs.unlink('languages.js',function(err){
      if(err) err;
      console.log("The previous file  deleted. And a New file has been added");
      AppendToFile();
    });

  }else {
    AppendToFile();
  }
});
}
*/
/**
 * Appends the resultant data to languages.js file which would be used in googleTranslate.js
 */
/*
function AppendToFile(){
  console.log("Data Added in languages.js file");
  fs.appendFileSync('languages.js',''+finalData+'\n');
  QuitDriver();
}

*/

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
