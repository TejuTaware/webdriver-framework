import { Given, When, Then} from "@cucumber/cucumber";
import {expect} from "chai"


  Given(/^Google page is opened$/, async function () {
    console.log(`Before opening browser...`);
    await browser.url("https://www.google.com")
    await browser.pause(1000)
    console.log(`After opening browser...`);
    
})

When(/^Search with (.*)$/,async function (searchItem) {
    console.log(`>> searchItem: ${searchItem}`);
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
    
})

Then(/^Click on the first search result$/,async function () {
     let ele = await $(`<h3>`)
     ele.click()
})

Then(/^URL should match (.*)$/, async function (ExpectedURL) {
    console.log(`>> expectedURL: ${ExpectedURL}`);
    await browser.waitUntil(async function () {
        return await browser.getTitle() === "Next-gen browser and mobile automation test framework for Node.js"}
        , {timeout: 20000, interval: 500, timeoutMsg: `Failed loading WDIO web page: ${await browser.getTitle()}`}) 
    let url = await browser.getUrl()
    expect(url).to.equal(ExpectedURL)
})
/**
 * Web Interactions
 */
/**Given(/^A web page is opened$/, async function(){
    await browser.url("https://the-internet.herokuapp.com/frames")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()
})*/

/**When(/^Perform web interactions$/, async function(){
    let ele = await $(`[type=number]`)
    await ele.setValue("12345")

    await browser.debug()
})*/

/**
 * 2.Dropdown
 * Actions:
 * 1.Assert default option is selected
 * 2.Select by attribute, text, index
 * Get a list of options
 */

/**When (/^Perform web interactions$/, async function(){
let ele = await $('//select/option[@selected="selected"]')
let val = await ele.getText()
expect(val).to.equal("Please select  option")
await browser.debug()
})*/

/*2 Select by attribute, text, index */

/**When (/^Perform web interactions$/, async function(){
    let ddEle = await $('#dropdown')
    await ddEle.selectByIndex(2)
    await browser.debug()
})*/

/**Get  a list of options */
/**When (/^Perform web interactions$/, async function(){
let eleArr = await $$(`select > option`)
let arr = []
for (let i=0; i< eleArr.length; i++){
    let ele = eleArr[i]
    let val = await ele.getText()
    arr.push(val)
    console.log(val);
}
console.log(`>> Options Array: ${arr}`);

await browser.debug()
})*/



/*3.Checkbox
 * 1.Select an option 
 * 2.Unselect an option (if selected)
 * 3.Assert if option is selected
 * 4.Select all options
 

/**1. Select an option */

    /** When (/^Perform web interactions$/, async function(){
        let ele = await $(`//form[@id="checkboxes"]/input[1]`)
        await ele.click()
        await browser.debug()
    })*/


 /** 2.Unselect an option */

    /**  When (/^Perform web interactions$/, async function(){
    let ele = await $(`//form[@id="checkboxes"]/input[2]`)
    if (!await ele.isSelected()){
        await ele.click()
    }
    await browser.debug()
     })*/


/** 3.Assert if option is selected */

    /* When (/^Perform web interactions$/, async function(){
        let ele = await $(`//form[@id="checkboxes"]/input[2]`)
        let isChecked = await ele.isSelected()
        expect(isChecked).to.true
        await browser.debug()
         })*/


 /** 4.Select all options */ 
    
    /**  When (/^Perform web interactions$/, async function(){
    let eleArr = await $$(`//form[@id="checkboxes"]/input`)
    for (let i=0; i< eleArr.length; i++) {
        let ele = eleArr[i]
        if(!await ele.isSelected()){
        ele.click()
        }
    }
    await browser.debug()
     })*/


     /* 4.Windows Handling
     1. Launch the browser
     2. Open another windows
     3. Switch to the window based on title
     4. Switch back to the main window


     * Methods used:
     1. getTitle()
     2. getWindowHandle()
     3. getWindowHandles()
     4. switchToWindow()
     */


     //open new windows
    /*  When (/^Perform web interactions$/, async function(){
        await $(`=Click Here`).click()
        await $(`=Elemental Selenium`).click()
        let currentWinTitle = await browser.getTitle()
        let parentWinHandle = await browser.getWindowHandle()
        console.log(`>> currentWinTitle: ${currentWinTitle}`);
    
     //Switch to specific window
     let winHandles = await browser.getWindowHandles()
     for (let i=0; i< winHandles.length; i++){
        console.log(`>> Win handle: ${winHandles[i]}`);
        await browser.switchToWindow(winHandles[i])
        currentWinTitle = await browser.getTitle()
        if(currentWinTitle === "Elemental Selenium Receive a Free, Weekly Tip on Using Selenium Like a Pro"){
            await browser.switchToWindow(winHandles[i])
            let headerTxtEleSel = await $(`<h1>`).getText()
            console.log(`>> headerTxtEleSel: ${headerTxtEleSel}`);
            break
        }
     }   
      
     //Switch back to parent window
     await browser.switchToWindow(parentWinHandle)
     let parentWinHeaderTxt = await $(`<h3>`).getText()
     console.log(`>> parentWinHeaderTxt: ${parentWinHeaderTxt}`);
        await browser.debug()
     })*/


     /** 5.Handling Alerts
      * 
      * Methods used:
      * 1. isAlertOpen()
      * 2. acceptAlert()
      * 3. dismissAlert()
      * 4. getAlertText()
      * 5. sendAlertText()
      */


    // isAlertOpen
    /*When (/^Perform web interactions$/, async function(){
        await $(`button=Click for JS Alert`).click()
        if (await browser.isAlertOpen()){
            await browser.acceptAlert()
        }
        await browser.debug()
      })*/


     // Confirm Alert
    /*  When (/^Perform web interactions$/, async function(){
        await $(`button=Click for JS Confirm`).click()
        if (await browser.isAlertOpen()){
            await browser.dismissAlert()
            await browser.pause(3000)
        }
        await browser.debug()
      })*/


      // Prompt Alert
    /*  When (/^Perform web interactions$/, async function(){
        await $(`button=Click for JS Prompt`).click()
        if (await browser.isAlertOpen()){
            let alertText = await browser.getAlertText()
            console.log(`>> alertText: ${alertText}`);
            await browser.sendAlertText(`Hello JS Prompt...`)
            await browser.acceptAlert()
            await browser.pause(3000)
        }
        await browser.debug()
      })*/


      /*6. File Upload */
    
    /*  When (/^Perform web interactions$/, async function(){
        await $(`#file-upload`).addValue(`${process.cwd()}//data/fileupload/dummy.txt`)
        await $(`#file-submit`).click()
        await browser.debug()
      })*/


    /* Frames
    * Methods used:
    1. switchToFrame
    2. switchToParentFrame
    */
   
    /** When (/^Perform web interactions$/, async function(){
        await  $(`=iFrame`).click()
        let ele = await $(`#mce_0_ifr`)
        await browser.switchToFrame(ele)
        //Interaction with frames...
        await $(`#tinymce`).addValue(`Typing into a frame...`)
        await browser.switchToParentFrame()
        await browser.debug()
    })*/


    /* 7.Key*/

    /*When (/^Perform web interactions$/, async function(){
        await $(`=iFrame`).click()
        let ele = await $(`#mce_0_ifr`)
        await browser.switchToFrame(ele)
        //Interaction with frames...
        await $(`#tinymce`).click()
        await browser.keys(["Meta","A"])
        await browser.pause(1000)
        await browser.keys("Delete")
        await $(`#tinymce`).setValue(`Typing into a frame...`)
        await browser.switchToParentFrame()
        await browser.debug()
    })*/

    
    
    

    

    

