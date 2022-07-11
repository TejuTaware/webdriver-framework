import { config as baseConfig } from "../test/wdio.conf"
export const config = Object.assign(baseConfig, {
    environment: "TEST",
    sauceDemoUrl1: "https://www.saucedemo.com"
})