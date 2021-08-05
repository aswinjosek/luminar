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