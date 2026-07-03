let a = 200;
let b = 10;
let c = 320;


if (a > b && a > c) {
   console.log("Max number is : A")
    if (b < c) {
        console.log("Min number is : B")
    } else {
       console.log( "Min number is : C")
    }
} else if (b > a && b > c) {
   console.log("Max number is : B")
    if (a < c) {
       console.log( "Min number is : A")
    } else {
        console.log( "Min number is : C")
        
        
    }
} else {
    console.log("Max number is : C")
    if (a < b) {
       console.log("Min number is : A")
    } else {
      console.log( "Min number is : B")
    }
}
