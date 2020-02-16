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
    console.log(result);
}
getData()


//flat function using when you have a matrix of multi deminision levels or arrays and want to make it in one deminsion array and using 1 or inifity as a paramter

