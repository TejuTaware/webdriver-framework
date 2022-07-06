import { Given, Then } from "@wdio/cucumber-framework";
import {expect} from "chai"

/** Web Table 
     * 1.Check number of rows and columns
     * 2.Get whole table data
     * 3.Get single row [based on a condition]
     * 4.Get single column
     * 5.Get single cell value [based on another cell]
    */

 Given(/^Open the website$/, async function(){
    await browser.url("https://the-internet.herokuapp.com/tables")
   // await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()
})

/** 1.Check number of rows and columns */

let rowCount;
let colCount;

Then(/^Check number of row and column$/, async function(){
  rowCount = await $$(`//table[@id="table1"]/tbody/tr`).length
expect(rowCount).to.equal(4)
console.log(`>> Number of rows: ${rowCount}`);

 colCount = await $$(`//table[@id="table1"]/thead/tr/th`).length
console.log(`>> Number of cols: ${colCount}`);
expect(colCount).to.equal(6) 
await browser.debug();
})



/**2.Get whole table data  */

Then(/^Check whole table data$/, async function(){
for (let i=0; i< rowCount; i++) {
   for (let j=0; j< colCount; j++) {
       let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
       console.log(`>> Cell Values: ${cellVal}`);
   }
}
 await browser.debug();
})


