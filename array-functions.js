// push(): adding elements at the end of the array and can take many arguments 
let arr = [10,20,30]
arr.push(40,50,60)
console.log('push , adding elements at the end of the array => ',arr);

//unshift(): adding elements at the begining of the array
arr.unshift(0,1,5)
console.log('unshift, adding elements at the begining of the array => ',arr);

//pop(): Removing elements from the end of an array and it takes NO Paramater
arr.pop()
console.log('pop, removing elements from the end of an array => ',arr);

//shift(): Removing elements at the begining of an array and it takes NO Paramater
arr.shift()
console.log('pop, removing elements at the begining of an array => ',arr);

//splice() : Insertion and Removal in between an Array and take many parameters:
//first parameter: is the position of the element that you want to delete and it removes at the begining of the array 
//second parameter: how many elements you want to remove
//third patameter [Optional]: the elements that you want to add and could be more than one element
arr.splice(0,3)
console.log('splice: send only two parameters to delete the first three elements in this array =>',arr)

arr.splice(-1, 0, 60,70,80)
console.log('splice: add three elements from the end of the array direction =>',arr)
