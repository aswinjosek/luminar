var employee={
    eid:1001,
    e_name:'ajay',
    salary:2000,
    desig:"developer"
}

//emp name
console.log(employee.e_name);

//chk for emp in employee then add 1 or exp=1


"exp" in employee? employee.exp+=1:employee.exp=1;
console.log(employee);

for(let key in employee){
    console.log(key);
    console.log(employee[key]);
}

