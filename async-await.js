function showName(name){
    console.log(`Hi, ${name}`);
}
showName('Ramy');

// async & await & promises

async function getData(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('done')   
        }, 2000);
    })
    let result = await promise
    console.log(`I have wait form 2 second ${result}`);
}
getData()

/////////////////////////////////////////
//convert promises to async and await

function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log(`Making request from ${location}`)
        if(location === 'google'){
            resolve('google say Hi!')
        }else{
            reject('we can only talk to google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// start using promises approach

// makeRequest('google')
// .then(response => {
//     return processRequest(response) // using return with the new promise to chain all promises together
// }).then(message => console.log(message))
// .catch(err => console.log(err))



// start using async and await approach
async function doWork(){
    try{
        //using await keyword with a function that depend on promises, and once the complier hit this word, it's go oustide the scoop to kepp working on another stuff and once it resloved and come back and keep working
        const response = await makeRequest('facebook') 
        console.log('Response Received!')
        const process = await processRequest(response)
        console.log(process)
    }catch (err){ // to handle errors in async and await approach, using try and catch
        console.log(err)
    }
}
doWork()