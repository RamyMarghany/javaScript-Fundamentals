//lexical scoping: when you have a variable outside the function and you want to use it inside the function

let i =1;
let f = () =>{
    console.log(i);
}
console.log('still can access i', i)
f()


//////////////////////////////////////

//with scoping
let fun;
if(true){
    let i =2;
    fun = () =>{
        console.log(i);
    }
}
//console.log(i) 'can't access i because the scoping boundries'
fun()


////////////////////////////////////////
//inside a function

let closuerFun = () =>{
    let x = 3;
    //return anonymus function
    return ()=>{
        console.log(x)
    }
}
closuerFun()() // calling one to return and a second time to call and retunred anonymus function


//////////////////////////////////////////////
//another example for a closuer inside a function

const counter = (function(){ //using anonymus function
    let privateCounter = 0;
    function changedBy(val){
        privateCounter += val;
    }
    return{
        increment: function(){
            changedBy(1)
        },
        decrement: function(){
            changedBy(-1)
        },
        value: function(){
            return privateCounter;
        }
    }
})()//IIFE

console.log('return the privateValue', counter.value());
counter.increment();
counter.increment();
counter.increment();
console.log('return the privateValue after incrementing', counter.value());
counter.decrement();
console.log('return the privateValue after decrementing', counter.value());


