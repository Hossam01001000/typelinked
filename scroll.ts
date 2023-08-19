// function easeOutElastic (t, b, c, d) {
//     var s = 1.70158;
//     var p = 0;
//     var a = c;
//     if (t == 0) return b;
//     if ((t /= d) == 1) return b + c;
//     if (!p) p = d * .3;
//     if (a < Math.abs(c)) {
//       a = c;
//       var s = p / 4;
//     }
//     else var s = p / (2 * Math.PI) * Math.asin(c / a);
//     return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * 
//       (2 * Math.PI) / p) + c + b;
// }
function scrollTo(element :Element, to:number, duration:number) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;
    let easeInOutQuad = function (t:any, b:any, c:any, d:any) {
        t /= d / 2;
        if (t < 1) {
          return (c / 2) * t * t + b;
        }
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
  
    const animateScroll = function () {
      currentTime += increment;
      const val = easeInOutQuad(
        currentTime,
        start,
        change,
        duration
      );
      element.scrollTop = val;
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

 
    requestAnimationFrame(animateScroll);
  }

  export{scrollTo}