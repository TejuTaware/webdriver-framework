import { Given, Then } from "@wdio/cucumber-framework";
import {expect} from "chai"
import {path} from 'app-root-path';
import logger from "../../helper/logger"

 import {config} from "dotenv";
import { info } from "winston";

 console.log("appRoot", path);

 config({ path: `${path}/.env` });

Given(/^As (a|am) (.*) user I Login to inventory web app$/, async function (prefixTxt, userType, dataTable) {
    logger.info(`${this.testid}: Started to login sause demo app...`)

    //Get the testid
    console.log(`>> Given step Test ID: ${this.testid}`);
    // Getting values from data table
    let dt = dataTable.hashes()
   // console.log(`>> The type of dt: ${typeof dt}`);
    //console.log(`>> The type of dt: ${dt.constructor}`);
    //console.log(`>> The value of dt: ${JSON.stringify(dt)}`);
    /** 1.Login browser */
    //console.log(`>> The userType: ${userType}`);
   // console.log(`Test username: ${process.env.TEST_USERNAME}`);
    //@ts-ignore
    //console.log(`browser value is:-${browser.config}`)
    //@ts-ignore
    await browser.url("https://www.saucedemo.com");
    //console.log(`>> Test config values: ${JSON.stringify(browser.config)}`)
    
    //await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()


     /**2.Login to Inventory */
    
    try {
        //console.log(`process.env.TEST_STD_USERNAME`);
        await $(`#user-name`).setValue(dt [0].Username)
       // await $(`#user-name`).setValue(process.env.TEST_STD_USERNAME)
        await $(`#password`).setValue(process.env.TEST_STD_PASSWORD)
        await $(`#login-button`).click()
    } catch (err) {
       // console.log(`Error in first login. Retrying..`);
        await browser.refresh()
        await browser.pause(2000)
        await $(`#user-name`).setValue("standard_user")
        await $(`#password`).setValue("secret_sauce")
        await $(`#login-button`).click()
        
    }

    /** Login with another */
    //await browser.pause(2000)
    //await browser.reloadSession()
    //await browser.url("https://www.saucedemo.com")
    //await  $(`#user-name`).setValue("problem_user")
    //await $(`#password`).setValue("secret_sauce")
    //await $(`#login-button`).click()
    //await browser.debug()

    //await browser.back()
    //await browser.pause(2000)
    //await browser.forward()
    //await browser.debug()

    
    this.appid = "ABC123"
})