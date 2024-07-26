//primitive

// 7 types :string, number, boolean,null,undefined,symbol,bigInt


const score =100
const scorvalue =100.25


const isLoggedIn =false
const outsideTemp =null
 let useEmail;
 const id =symbol(`123`)

 const anotherId = symbol(`123`)


 console.log(Id=== anotherId);//false



 const bigNumber = 214458879932352584756n




// reference type:(non primitive)


// array, objects,funtions


const heroes =["shaktiman","nagraj","gabaar"]

{

    name: "shivam"
    age: 20
    height: 5.8
}

   const myFunction = funtion(),{
    console.log("hgello ! shivam this side");

}

 console.log(typeof bigNumber);// for check datatype of any variable 
 









//************************************************************************************************************* */

//memory
//stack (primitive),Heap (non primitive )
  
let myyoutubename ="shivampandeydotcom"

let anothername = myyoutubename
anothername="ShivDevi"


console.log(myyoutubename)
console.log(anothername)
let userOne={
    email: "shivdevi@mail.com"
    upi: "user@upi"
}

let useretwo =userOne

useretwo.email="ram@.com"



console.log(userOne.email)// ram@.com
console.log(useretwo.email)//ram@.com





//******************************************************************************************************* */
  //string 

  const name =" shivam"
  const repoCount =23

console.log (`hello my name is ${shivam} and my repo count is ${repoCount} `);
const gameName =new String(`shivDevi`)
console.log(gameName[1]);
console.log(gameName.__proto__);




