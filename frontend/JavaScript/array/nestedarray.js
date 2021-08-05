var employees = [
  [1000, "ram", 2, 25000, "developer"],
  [1001, "ravi", 1, 22000, "developer"],
  [1002, "raju", 3, 27000, "qa"],
  [1003, "nikil", 1, 22000, "qa"],
];

// for(let employee of employees){
//     if(employee[3]>23000){
//         console.log(employee[1]);
//     }
// }

// fibonacci series
// chk given array elements are same or not

// print highest paid employee


// print number of employees working as developer
// print number of employees working as qa

let count = 0;
let no = 0;
for (let employee of employees) {
  if (employee[4] == "developer") {
    count = count + 1;
  } else {
    no = no + 1;
  }
}
console.log("the no.of developers is", count);
console.log("the no of qa id", no);

//max salary

var max_sal = 0;

for (let employee of employees) {
  if (employee[3] > max_sal) {
    max_sal = employee[3];
  }

}
console.log(max_sal);
for(let employee of employees){
  if(employee[3]==max_sal){
    console.log(employee);
  }

}

// print lowest paid employee

var min_sal = 0;
var max_sal=0;

for (let employee of employees) {
  if (employee[3] > min_sal) {
    max_sal<min_sal;
    min_sal=max_sal;
    // console.log(min_sal);
    min_sal = employee[3];
    min_sal=max_sal;
  }
  // console.log(employee[3]==max_sal);

}
console.log(mix_sal);
