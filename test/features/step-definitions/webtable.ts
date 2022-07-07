import { Given, Then } from "@wdio/cucumber-framework";
import {expect} from "chai"

/** Web Table 
     * 1.Check number of rows and columns
     * 2.Get whole table data
     * 3.Get single row [based on a condition]
     * 4.Get single column
     * 5.Get single cell value [based on another cell]
    */

 /**Given(/^Open the website$/, async function(){
    await browser.url("https://the-internet.herokuapp.com/tables")
   // await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()
})

/** 1.Check number of rows and columns */

let rowCount;
let colCount;

/**Then(/^Check number of row and column$/, async function(){
  rowCount = await $$(`//table[@id="table1"]/tbody/tr`).length
expect(rowCount).to.equal(4)
console.log(`>> Number of rows: ${rowCount}`);

 colCount = await $$(`//table[@id="table1"]/thead/tr/th`).length
console.log(`>> Number of cols: ${colCount}`);
expect(colCount).to.equal(6) 
await browser.debug();
})*/



/**2.Get whole table data  */

/**Then(/^Check whole table data$/, async function(){
   let arr = []
for (let i=0; i< rowCount; i++) {
     let personObj = {
         lastname : "",
         firstname : "",
         email : "",
         due : "",
         web : ""
} 

   for (let j=0; j< colCount; j++) {
       let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
       if (j === 0) personObj.lastname = cellVal
       if (j === 1) personObj.firstname = cellVal
       if (j === 2) personObj.email = cellVal
       if (j === 3) personObj.due = cellVal
       if (j === 4) personObj.web = cellVal
   }
   arr.push(personObj)  
}

console.log(`Whole table: ${JSON.stringify(arr)}`);
 await browser.debug();
})*/

/** 4.Get single row based on condition */

/**Then(/^Get single row based on condition$/, async function(){
   let arr = []
for (let i=0; i< rowCount; i++) {
     let personObj = {
         lastname : "",
         firstname : "",
         email : "",
         due : "",
         web : ""
} 

   for (let j=0; j< colCount; j++) {
       let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
       let firstname = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText();
       if (firstname === "Jason"){
       if (j === 0) personObj.lastname = cellVal
       if (j === 1) personObj.firstname = cellVal
       if (j === 2) personObj.email = cellVal
       if (j === 3) personObj.due = cellVal
       if (j === 4) personObj.web = cellVal
       }
   }
   if (personObj.firstname){
   arr.push(personObj) 
   } 
}

console.log(`Whole table: ${JSON.stringify(arr)}`);
 await browser.debug();
})*/


/** 5.Get single column */
/**Then(/^Get single column$/, async function(){
let arr = []
for(let i =0; i < rowCount; i++){
   let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText();
   arr.push(cellVal)
}
console.log(`>> Single column values: ${arr}`);
await browser.debug();
})*/

/** 6.Get single cell value based on another cell */
/**Then(/^Get single cell value based on another cell$/, async function(){
   let arr = []
   for(let i =0; i < rowCount; i++){
      let price = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText();
      let firstname = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText();
      if (+(price.replace("$","")) > 50){
      arr.push(firstname)
      }
   }
   console.log(`>> Single column values: ${arr}`);
   await browser.debug();
   })*/

