import java.util.Scanner;
class nested {
public static void main(String[] args){
Scanner sc = new Scanner(System.in);
System.out.println("enter the value of x");
double x = sc.nextDouble();
System.out.println("enter the value of y");
double y = sc.nextDouble();
System.out.println("enter the value of z");
double z = sc.nextDouble();
if(x>y){
if(x>z){
System.out.println("x is larger number");
}
else
{
System.out.println("z is larger number");
}
}
else{
if(y>z){
System.out.println("y is greater");
}
else{
System.out.println("z is larger number");
}
}
}
}

