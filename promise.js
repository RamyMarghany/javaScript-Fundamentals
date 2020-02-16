let p = new Promise((resolve, reject)=>{
    let a = 1 + 2;
    if(a == 2){
        resolve('success')
    }else{
        reject('failed')
    }
})

p.then(message => console.log(`the promise is ${message}`))
.catch(err => console.log(`the promise is ${err}`))


////////////////////////////////////

function watchTutorial(){
    let userSubscribed = false
    let userWatchingMeme = true

    return new Promise((resolve, reject)=>{
        if(userSubscribed){
            reject({
                name:'User Left',
                message:':('
            })
        }else if(userWatchingMeme){
            reject({
                name:'user watching memes',
                message: 'Tutorials <  Memes'
            })
        }else{
            resolve('Thumbs up and subscribe ')
        }
    })
}

watchTutorial().then(message => console.log(message))
.catch(err => console.log(err.name + ' ' + err.message))


///////////////////////////////////

const recordVideoOne = new Promise((resolve, reject)=>{
    resolve('Video 1 has watched')
})


const recordVideoTwo = new Promise((resolve, reject)=>{
    resolve('Video 2 has watched')
})


const recordVideoThree = new Promise((resolve, reject)=>{
    resolve('Video 3 has watched')
})

// waiting till the all promises are resloved and successed
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message=>console.log(message))


// waiting till only one promise is resloved and successed (the first one)
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message=>console.log(message))