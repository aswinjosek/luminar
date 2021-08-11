class Person{
    constructor(age,name){
        this.name=name;
        this.age=age
    }

    printPerson(){
        console.log(this.age,this.name);
    }
}

var obj=new Person(22,"aswin");
obj.printPerson()