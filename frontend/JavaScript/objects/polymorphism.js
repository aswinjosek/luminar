//method overloading

class Add{
    add(){
        console.log("no args");


    }
    add(num1){
        console.log("1 args");

    }
    add(num2,num1){
        console.log("2 args");

    }

}

var obj=new Add();
obj.add();
obj.add(1,2)
