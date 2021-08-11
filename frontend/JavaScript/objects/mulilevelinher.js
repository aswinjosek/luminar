class Parent{
    m1(){
        console.log("inside parent");
    }
}

class SubChild extends Parent{
    m2(){
        console.log("inside subchild");
    }
}

class Child extends SubChild{
    m3(){
        console.log("inside child");
    }
}

var child=new Child();
child.m3()
child.m2()
child.m1()

var subchild=new SubChild()
subchild.m2()
subchild.m1()


