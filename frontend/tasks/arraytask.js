const user=[{
    name:"don",
    age:20,
    job:"developer"
},
{
    name:"raj",
    age:20,
    job:"developer"
},
];
var ton={};
for(let i of user){
    for(let i in user){

        // let name=i[name];
        // let age=i[age]
        ton[i]={
            "nam":i["name"],
            "ag":i["age"]
        }
    }
}
console.log(ton);


