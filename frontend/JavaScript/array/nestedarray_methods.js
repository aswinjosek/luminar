var employees = [
    [1000, "ram", 2, 25000, "developer"],
    [1001, "ravi", 1, 22000, "developer"],
    [1002, "raju", 3, 27000, "qa"],
    [1003, "nikil", 1, 22000, "qa"],
  ];


  console.log(employees.filter(emp=>emp[3]>23000 & emp[4]=="developer").map(emp=>emp[1]));

  console.log(employees.map(emp=>emp[4]));