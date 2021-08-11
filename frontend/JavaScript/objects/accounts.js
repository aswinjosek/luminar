var datas=[
    {acno:1000,ac_type:"savings",balance:5000,transactions:[
        {to:1001,amount:500,note:"food"},
        {to:1003,amount:600,note:"travel"},
        {to:1001,amount:700,note:"ball"}

    ]},
    {acno:1001,ac_type:"savings",balance:6000,transactions:[
        {to:1000,amount:550,note:"bill"},
        {to:1002,amount:900,note:"emi"},
        {to:1002,amount:650,note:"bill"}

    ]},
    {acno:1002,ac_type:"savings",balance:8000,transactions:[
        {to:1001,amount:600,note:"clothing"},
        {to:1000,amount:800,note:"travel"},
        {to:1000,amount:6700,note:"cycle"}

    ]},
    
]

// console.log(datas.some(account=>account.acno==1005));

// datas.sort((acc1,acc2)=>acc1.balance-acc2.balane).forEach(acc=>console.log(acc));

// datas.filter(acc=>acc.acno==1000).forEach(acc=>console.log(acc.transactions))

//credit acno/1000 trans

// datas.map(account=>account.transactions).forEach(transactions=>{
//     transactions.forEach(trans=>{
//         trans.to==1000? console.log(trans):" "
//     })
// })

//payment hostoty of 1001
// var payment_history=[]
// datas.map(account=>account.transactions).forEach(transactions=>{
//     transactions.forEach(trans=>{
//         trans.to==1000?payment_history.push(trans):" "
//     })
// }) 

// console.log(trans);

// datas.filter(account=>account.transactions.acno==1000).map(account=>payment_history.push(account.transactions))
// console.log(payment_history);

// datas.filter(acc=>acc.acno==1000).forEach(dat=>console.log(dat.transactions));
// datas.sort((acc1,acc2)=>acc1.balance-acc2.balance).forEach(dat=>console.log(dat))

//1000 credit history
// datas.map(acc=>acc.transactions).forEach(transactions=>{
//     transactions.forEach(transactions=>{
//         transactions.to==1000?console.log(transactions):""
// })
// });

// var payment_history=[]

// datas.map(acc=>acc.transactions).forEach(transactions=>{
//     transactions.forEach(transactions=>transactions.to==1000?payment_history.push(transactions):" ");
// });


// datas.filter(acc=>acc.acno==1000).forEach(acc=>payment_history.push(acc.transactions));
// console.log(payment_history);

for(let payments of datas){
    for(let payment of payments.transactions){
        if(payment.to==1000)
        console.log(payment);
    }
}