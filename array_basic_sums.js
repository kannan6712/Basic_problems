// 1.
let arr=[1,2,3,4,1,2,2,1]

let obj={}

for(let i of arr){

    if (i in obj){
        obj[i]+=1
    }

    else{

        obj[i]=1
    }
}
console.log(obj);


//2.
let arr = [1, 2, 3, 4, 1, 2, 2, 1];

let obj = {};

for (let i of arr) {
  if (i in obj) {
    obj[i] += 1; //
  } else {
    obj[i] = 1;
  }
}
console.log(obj);