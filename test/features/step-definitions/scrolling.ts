import {Given, Then} from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^Open the website$/, async function(){
    await browser.url("https://www.amazon.com.au/")
   // await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()
})

/**
 * Scrolling
 * 
 * Visible Portion
 * Windows Object:
 * 1.ScrollBy
 * Y -> [-]window.innerHeight
 */

//Scroll Down
/**Then(/^Scroll down$/, async function(){
await browser.execute(() => {
    window.scrollBy(0, window.innerHeight)
})
await browser.pause(2000)
await browser.debug()
})*/

/**
 * Scroll Top
 */
/**Then(/^Scroll Top$/, async function(){
    await browser.execute(() => {
        window.scrollBy(0, -window.innerHeight)
    })
    await browser.pause(2000)
    await browser.debug()
})*/

/**
 * Invisible Portion
 * Windows Object
 * 1.scrollTo
 *  Y -> document.body.scrollTop[scrollHeight]
 */
 /**Then(/^Scroll To$/, async function(){
  await browser.pause(2000)
   await browser.execute(() => {
    window.scrollTo(0, document.body.scrollHeight)
    
})
await browser.debug()
 })*/

 Then(/^Scroll Top$/, async function(){
    await browser.pause(2000)
     await browser.execute(() => {
      window.scrollTo(0, document.body.scrollTop)
      
  })
  await browser.debug()
   })