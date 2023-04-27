
// birinci usul
// var string = 'Yunis Garayev is considered a student of Code academy',
//     searchFor = prompt(),
//     count = 0,
//     pos = string.indexOf(searchFor);

// while (pos > -1) {
//     count++;
//     pos = string.indexOf(searchFor, ++pos);
// }

// console.log(count);




// ikici usul

// let string = "Yunis Garayev is considered a student of Code academy";
// let searchFor =prompt();

// let count = string.split(searchFor).length - 1;
// console.log(count); 


// ucuncu usul



let arr = ["Yunis","Garayev","Baki","Sumqayit"];
searchFor=prompt()
let count=0;
 for (let i = 0; i < arr.length; i++) { 
  
  for (let z = 0; z < arr[i].length; z++) {
    if (arr[i][z].includes(searchFor)){ 
      count++; 
        
    } 
  }  
} 
console.log(count);
