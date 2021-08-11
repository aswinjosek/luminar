class Parent{
    phone(){
        console.log("inside parent");
    }
}

class Child extends Parent{

}

var obj=new Child();
obj.phone()