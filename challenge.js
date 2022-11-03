//Challenge 1
//Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
let isNumberPositive =(a)=>{
    if (a>0)
    {
        return true;
    }
   else {
    return false;
  }
}
console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));


//Challenge 2
//Write a function that takes a number of days and converts it into an age

let convertDaysToAge =(days)=>{
    currentAge=days/365;
    console.log(currentAge)
}
convertDaysToAge(3650);
convertDaysToAge(6570);

// Challenge 3
//Write a function that takes three numbers and returns the largest of the three numbers.
let getLargestNumber =(a,b,c)=>{

   if (a>b&&a>c)
   {
    console.log(a)
   }

   else if (b>a&&b>c)
   {
    console.log(b)
   }
   else if (c>a&&c>b)
   {
    console.log(c)
   }

}
getLargestNumber(2 ,1, 4);
getLargestNumber(6,2,3);

// Challenge 4
// Write a function that takes an array of names and returns the last name from the array of names
let getLastName =(n=[])=>{  
    LastName = n[n.length -1];
    console.log(LastName);
}
getLastName(["Charlie", "Rob", "Andy"]);
getLastName(["Ash","Stu"]);

//Challenge 5
/* Write a function that takes an array of numbers and returns true if all of the numbers are positive. 
It should return false if there are one or more negative numbers in the array.*/

let allNumbersPositive=(n=[n])=>{
 if (n[0]>0 &&n[1]>0 && n[2]>0){
   //  for(let i=0; i<n.length(); i++){
   //  if (n(i)>0){
       return true;
    }
    else {
        return false;
    }
}
console.log(allNumbersPositive([2,4,-5]));
console.log(allNumbersPositive([5,4,6]));
