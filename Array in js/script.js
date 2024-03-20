// using array constructor

// let fruits = new Array("mango","banana","apple")
// console.log(fruits);

// USING ARRAY LITERAL

// let fruits =[ "mango", "banana", "apple" ]
// console.log(fruits);

    // CREATE AN EMPTY ELEMENT
    // let arr = []
    // console.log(typeof arr);

    // ACCESING ELEMENT :
    // let fruits = [ "mango", "banana", "apple" ]
    // console.log(fruits[1]);

    // MODIFYING AN ELEMENTS

    //     let fruits = [ "pine", "banana", "apple" ]
    //      fruits [0] = "mango";
    //    console.log(fruits);

    // FOR LOOPS ALSO KNOW AS ITERABLE FOR EXAMLE

    // let fruits = [ "pine", "banana", "apple","orange","guava" ]
    // for( let item  of fruits)
    // console.log(item);


    // // FOR IN LOOP EXAMPLE
    // let fruits = [ "pine", "banana", "apple","orange","guava" ]
    // for(let item in fruits)
    // console.log(item);

    // FOE EACH METHOD EXAMPLE

    // let fruits = [ "pine", "banana", "apple","orange","guava" ]
    //  fruits.forEach(( curElem,index,arr ) =>{
    //  console.log(`${curElem} ${index}`);
    // })
    

    // MAP FUNCTION EEXAMPLE
    let fruits = [ "pine", "banana", "apple","orange","guava" ]
    const MyMapArr = fruits.map (( curElem,index,arr ) =>{
     return(`${curElem} ${index}`);
   })
   console.log(MyMapArr);

// // Write a program to multiple each element with 2

// const number = [1,2,3,4,5]
// number.forEach(Element => {
//     console.log(Element*2);
// });


// const number = [1,2,3,4,5]
//  const doubleValve = number.map(Element => {
// return Element *2
// });
// console.log(doubleValve);


// HOW TO INSERT,ADD,DELETE,ELEMENT IN THE ARRAY (CRUD)
// FOR PUSH METHOD

// let fruits = [ "pine", "banana", "apple","orange","guava" ]
// fruits.push("pineapple")
// console.log(fruits);
   
// FOR POP METHOD

// let fruits = [ "pine", "banana", "apple","orange","guava" ]
// fruits.pop()
// console.log(fruits);


// UNSHIFT METHOD

// let fruits = [ "pine", "banana", "apple","orange","guava" ]
// console.log(fruits.unshift());
// console.log(fruits);


// WHAT IF WANT TO REMOVE OR ADD ANY WHERE 
// THE SLICE()

// let fruits = [ "pine", "banana", "apple","orange","guava" ]
// fruits.splice(0, 1, "pie")
// console.log(fruits);


// ADD DEC AT THE END OF THE ARRAY

// const months = ["jan", "march","april" ,"june","july"];
// months.push("Dec");
// console.log(months);


// update march to March

// const months = ["jan", "march","april" ,"june","july"];
// const indexToUpdate = months.indexOf("march")
// months.splice(indexToUpdate,1 , "March")
// console.log(months);

// delete june 

// const months = ["jan", "march","april" ,"june","july"];
// const indexToDelete = months.indexOf("june")
// months.splice(indexToDelete,1)
// console.log(months);


// Filter method

// let example user want to delete 6 value

// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 9];

// let updatedCart = numbers.filter((curElem)=>{
// return curElem !== value;

// });
// console.log(updatedCart);


// using map to square each number and create a new aaray

// const number = [1,2,3,4 ]

// let result = number.map((curElem)=>  curElem * curElem);
// console.log(result);


// using map function take array of number nd return a new number and square the no if the is only even

// const number = [1,2,3,4,5,6]

// const result = number.map((curElem)=>{
//     if(curElem  % 2 === 0){
//         return curElem * curElem
//     }
  
// }).filter((curElem)=>  curElem !== undefined )

// console.log(result);
