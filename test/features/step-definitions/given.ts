import { Given, Then } from "@wdio/cucumber-framework";
import {expect} from "chai"
import {path} from 'app-root-path';
import {config} from "dotenv";
import { info } from "winston";
import reporter from "../../helper/reporter"
import sauseHomePage from "../../page-objects/sause.home.page"
console.log("appRoot", path);
config({ path: `${path}/.env` });

Given(/^As (a|am) (.*) user I Login to inventory web app$/, async function (prefixTxt, userType, dataTable) {
    
    try {
        reporter.addStep(this.testid, "info","login to sauce demo")
        let dt = dataTable.hashes()
       //@ts-ignore
        await browser.url(config.sauseDemoURL);
        await sauseHomePage.loginToSauseApp(this.testid, process.env.TEST_STD_USERNAME, process.env.TEST_STD_PASSWORD)   
    } catch (err) {
       err.message = `${this.testid}: Failed at login step, ${err.message}`
       throw err 
    }
})