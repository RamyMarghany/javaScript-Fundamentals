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


