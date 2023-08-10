import puppeteer from "puppeteer";

let initaia = async()=>{
    const browser = await puppeteer.launch({
        protocolTimeout: 90000000,
        userDataDir: "D:data",
        defaultViewport: null,
        headless: false
      });
      return browser
    
}

