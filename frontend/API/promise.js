var mypromise=new Promise((resolve,reject)=>{
    let attendance =40;
    if(attendance>50){
        resolve("you sre eligible")
    }
    else{
        reject("not eligible")
    }

})
mypromise.then(res=>console.log(res)).catch(rej=>console.log(rej));