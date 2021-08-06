var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]
//product named complan

console.log(products.find(item=>item[1]=="complan"));

//some items under rs 200

console.log(products.some(item=>item[2]<200));

//for each

products.forEach((item)=>console.log(item[1]));

//price range

console.log(products.some(item=>item[2]>200 & item[1]=="complan"));

//sort

products.sort((item1,item2)=>item1[2]-item2[2]).forEach(item=>console.log(item));

