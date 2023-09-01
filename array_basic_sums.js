// problem  1
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


//problem 2
let arr1 = [1, 2, 3, 4, 1, 2, 2, 1];

let obj1 = {};

for (let i of arr1) {
  if (i in obj1) {
    obj1[i] += 1; //
  } else {
    obj1[i] = 1;
  }
}
console.log(obj1);