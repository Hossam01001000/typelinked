

let getPages = async(page:any)=>{
    page

let num = await page.evaluate(() => {
    let wait = (delay:number) =>
      new Promise<void>((resolve) => setTimeout(() => resolve(), delay * 1000));
    let fish = (arg:string) => {
      return document.querySelector(arg);
    };
    let fishes = (arg:string) => {
      return document.querySelectorAll(arg);
    };
    let ul = fish(
      ".artdeco-pagination__pages artdeco-pagination__pages--number"
        .split(" ")
        .join(".")
    );
    if (ul) {
      return ul?.lastElementChild?.getAttribute(
        "data-test-pagination-page-btn"
      );
    } else {
      return 0;
    }
}
)
console.log(num);
return num

}
// let num = await page.evaluate(() => {
//     let wait = (delay) =>
//       new Promise((resolve) => setTimeout(() => resolve(), delay * 1000));
//     let fish = (arg) => {
//       return document.querySelector(arg);
//     };
//     let fishes = (arg) => {
//       return document.querySelectorAll(arg);
//     };
//     let ul = fish(
//       ".artdeco-pagination__pages artdeco-pagination__pages--number"
//         .split(" ")
//         .join(".")
//     );
//     if (ul) {
//       return ul.lastElementChild.getAttribute(
//         "data-test-pagination-page-btn"
//       );
//     } else {
//       return 0;
//     }
//   });
//   console.log(num);

export {getPages}