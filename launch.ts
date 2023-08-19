import puppeteer from "puppeteer";

let initate = async(url:string)=>{
    const browser = await puppeteer.launch({
        protocolTimeout: 90000000,
        userDataDir: "D:data",
        defaultViewport: null,
        headless: false
      });
     let page =await browser.newPage()
     page.setDefaultNavigationTimeout(120000);
     await page.goto(url);
     return page

    
}

export {initate}