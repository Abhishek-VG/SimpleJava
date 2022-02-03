class StaticANDNonStatic {
    public static void main(String[] hello) {
        // without class name as it is present inside the sameclass
        staticMethod();
        // with classname
        StaticANDNonStatic.staticMethod();

        // calling non static method
        // nonStaticMethod();
        // StaticANDNonStatic.nonStaticMethod();
        StaticANDNonStatic s = new StaticANDNonStatic();
        s.nonStaticMethod();

        System.out.println("=================================");

        // DIFF CLASS, class name is must as method present in diff class
        OtherClass.staticMethod();
        System.out.println(OtherClass.staticVariable);
        // non static
        OtherClass o = new OtherClass();
        o.nonStaticMethod();
        System.out.println(o.nonStaticVariable);
    }

    public static void staticMethod() {
        System.out.println("Calling static method");
    }

    public void nonStaticMethod() {
        System.out.println("Calling non static method");
    }
}


class OtherClass {
    public static String staticVariable = "I am Static variable"; 
    public String nonStaticVariable = "I am NON Static variable"; 

    public static void staticMethod() {
        System.out.println("Calling static method of OtherClass");
    }

    public void nonStaticMethod() {
        System.out.println("Calling non static method of OtherClass");
    }
}