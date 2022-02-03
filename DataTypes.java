class DataTypes {
public static void main(String[] args) {
    {
        // declaring character
        // must be within single quote
        // only one character
        char a = 'G';
  
        // Integer data type is generally
        // used for numeric values
        int i = 89;

        // Integer data type is generally
        // used for numeric values
        long l = 89;
  
        // for float use 'f' as suffix
        float f = 4.7333434f;
  
        // true/false
        boolean myBool = true;

        // by default fraction value
        // is double in java
        double d = 4.355453532;

        // use byte and short
        // if memory is a constraint
        byte b = 4;
  
        // this will give error as number is
        // larger than byte range
        // byte b1 = 7888888955;
  
        short s = 56;
  
        // this will give error as number is
        // larger than short range
        // short s1 = 87878787878;
  
  
        System.out.println("char: " + a);
        System.out.println("integer: " + i);
        System.out.println("long: " + i);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
        System.out.println("boolean: " + myBool);
        System.out.println("byte: " + b);
        System.out.println("short: " + s);
    }
  }
}