javac <filename.java>
example = javac HelloWorld.java

java <generated_class_name>
dont add .class extension
example = java HelloWorld


========================
TOKENS => identifier, keywords, operators,...

tokens => what ever u write in code are tokens, how to differentiate them? You'll see in grouping

keywords => Keywords are predefined, reserved words used in programming that have special meanings to the compiler. Keywords are part of the syntax and they cannot be used as an identifier. For example: int money; Here, int is a keyword that indicates money is a variable of type int (integer).

identifier => "Identifiers" or "symbols" are the names you supply for variables, types, functions, and labels in your program. ... You create an identifier by specifying it in the declaration of a variable, type, or function

operators => +, -, *, /, %, ==, =, ++, --

=========================
Conditional statemenets
1.if elseif else
2. switch case

========================
loops
for()

=========================
data types in java
// https://www.w3schools.com/java/java_data_types.asp

1byte = 8bit 
1kb = 1024bytes
1mb = 1024kb
1gb = 1024mb

// binary to decimal
// https://www.rapidtables.com/convert/number/binary-to-decimal.html
byte	1 byte	Stores whole numbers from -128 to 127
short	2 bytes	Stores whole numbers from -32,768 to 32,767
int	    4 bytes	Stores whole numbers from -2,147,483,648 to 2,147,483,647
long	8 bytes	Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
float	4 bytes	Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
double	8 bytes	Stores fractional numbers. Sufficient for storing 15 decimal digits
boolean	1 bit	Stores true or false values
char	2 bytes	Stores a single character/letter or ASCII values