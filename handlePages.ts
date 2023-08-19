import { scrollTo } from "./scroll"
let handlePages = async(num:number , page: any)=>{
for (let i = 0; i < num - 1; i++){
await page.evaluate(async()=>{
    let wait = (delay:number) =>
    new Promise<void>((resolve) => setTimeout(() => resolve(), delay * 1000));
  let fish = (arg:string) => {
    return document.querySelector(arg);
  };
  let fishes = (arg:string) => {
    return document.querySelectorAll(arg);
  };
  let clime = scrollTo
  let element = fish(".scaffold-layout__list")?.children[1] as Element
console.log(clime)

  let elementHeight = element?.scrollHeight - element?.clientHeight;
//   clime(element,0,2500);
console.log(elementHeight)
//   await wait(4);
//   clime(element,elementHeight,7500)
//   await wait(10)
});

}
}

export{handlePages}