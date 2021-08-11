class Parent{
    phone(){
        console.log("samsung");
    }
}

class Child extends Parent{
    phone(){
        super.phone()
        console.log("iphone");
    }
}

var child=new Child()
child.phone()