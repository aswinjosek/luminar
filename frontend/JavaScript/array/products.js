var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// print product names

console.log(products.map(product=>product[1]));


// print avaialable product name

console.log(products.filter(product=>product[3]!=0).map(product=>product[1]));

// print out of stock product details

console.log(products.filter(product=>product[3]==0));

// list all products whose price > 250

console.log(products.filter(product=>product[2]>250));
// low cost product

var low_cost=products.reduce((item1,item2)=>item1[2]<item2[2]?item1[1]:item2[1]);
console.log(low_cost);

// is there any item available under 200

console.log(products.filter(product=>product[2]<200).map(product=>product[1]));

//max stock

var max_stock=products.reduce((item1,item2)=>item1[3]>item2[3]?item1:item2)
console.log(max_stock);
