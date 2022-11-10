// This is a comment
/* this   
is a 
comment for a block code*/
 
 //Declaration od varibale
//1)
const GROUP = 'Appolos Sentries';
//Group = 'Bonjour' //Cannot assign to "Group" because it is a constant

//2)
let x = 3
x = 2

//3)
var found = false
found = 'gggg'
//console.log(found)

const fname = 'Appolos';
const lname = 'Sentries'

//concaténation
console.log(fname + ' '+ lname)

const Person = {
  name:'Nidhal',
  age:28,
  Adresse:'Los Angles'
}

//change a value of a <key
  //1)
  Person.name = 'Achref'
 //2)
  Person["age"] = 10
  console.log(Person)

  //Add a key 
  Person.FavouriteFoods = ['pasta']
  console.log(Person)

  //tab
  const array = [1,2,5,8];
  // déterminer le nombre des élements dans le tableau
  console.log(array.length)
  //a
  arr[1]
  
  const tab =[1,5,22,60]
//tab.push(26)
//tab.pop()
tab.unshift(26)
tab.shift()
console.log(tab)

  // Declaration de la Fonction 
//1) 
const a = 4;
const b = 9

function Sum (){
  return a+b
}
//call the function for the execution
console.log(Sum(4,8)) //Arguments

//2)
const Sum = function (a,b){
    return a +b
}

//call the function ==> execution
console.log(Sum(1,7))

const a = 30
const tab = [1,5,7]
console.log(typeof(tab)) //obj
console.log(typeof(null)) //obj //instance of obj

console.log(Array.isArray(tab)) //true

//increment
let a = 5;
//a = a+1
//a += 1

//console.log(++a)
a += 5
console.log(a)

//Decrement
let x = 45;
//x = x - 1
//x -= 1
--x
console.log(x)

// Condition ==> if statement
let color = 'black'
if(color == 'red'){
    console.log('You have to stop')
}
else if(color== 'orange'){
    console.log('You have to wait a little bit')
}
else {
    console.log('You can go')
}

// Condition ==> Switch statement
let color = 'orange'
switch (color){
    case 'red' : console.log('You have to stop')
    break
    case 'orange' :     console.log('You have to wait a little bit')
    break
    default :     console.log('You can go')
}

//Iteration pour nombre définie ==> for

let arr = [1,55,8,68];
let Sum = 0;
//1)
for (let i=0;i< arr.length;i++){
   // console.log(arr[i])
   //if(i%2 == 0){
      // console.log(arr[i])
   //}
   Sum += arr[i] 
}
console.log(Sum)

//2) 
for (const i in arr){
  Sum += arr[i] 
}
//3)
for (const el of arr){
  Sum += el 
}
console.log(Sum)

//Iteration de nombre inconnue ==> While
let i=0;
while(i< arr.length){
    Sum += arr[i];
    i++
}

//diff between while and do while
let found = false

//while verify the condition then execute ==> execution at least 0
while(found == true){
    console.log('Its founded')
}

//execute then verify ==> execution at least once
do {
    console.log('its founded')
}
while(found == true)




