// get the values in the object

let z = {
    a:1,
    b:2
  };
  
  const xArry = []
  
  for (let i in z){
    console.log('get the value in the object',xArry.push(i))
  }
  
  
  /////////////////////////////////
  
  // reverse the text
  
  let x = 'hi'
  let y= 'ih'
  
  const reverseString = str => str.split('').reverse().join('')
  console.log(reverseString(x))
  
  
  /////////////////////////////////
  
  // return this to return back to the object
  
  const obj = {
    a:1,
    b:2,
    getA(){
      console.log(this.a)
      return this;
    },
    getB(){
      console.log(this.b)
    }
  }
  
  obj.getA().getB()
  
  
  /////////////////////////////////
  
  // convert an array to string
  
  const arr = [1,2,3,4,5]
  console.log(arr.join())
  
  
  /////////////////////////////////
  
  // concat two arrays
  
  const a = [1,2,5,7,9]
  const b = [2,5,7,12,100]
  const c = a.concat(b)
  
  console.log(c)
  
  
  /////////////////////////////////
  
  // add the element in the array
  
  const arr = [1,3,5,7,9]
  const res = arr.reduce((acc, item)=> acc * item)
  console.log(res)
  
  
  /////////////////////////////////
  
  //flat function using when you have a matrix of multi deminision levels or arrays and want to make it in one deminsion array and using 1 or (inifity) as a paramter
  let arr = [[1,2], [2,3], [3,5]]
  let flateArr = arr.flat()
  console.log(flateArr)
  
  ///////////////////////////////
  
  let strs = ['te','st']
  let wo = strs.join('')
  console.log(wo)