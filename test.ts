let l = 0

for (let b:number=0 ; b<6; b+=.00001){
   if( Number.parseFloat(b.toFixed(5)) - Math.round(b) == 0){
    console.log(Math.round(b))
   }

}