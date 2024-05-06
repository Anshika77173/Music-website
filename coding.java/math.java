import java.util.Scanner;
class math{
public static void main(String[] args)
{
Scanner sc = new Scanner(System.in);
double Xc=43,Yc=67,r=56;
System.out.println("enter the value of x");
double x = sc.nextDouble();
System.out.println("enter the value of y");
double y = sc.nextDouble();
double d =  Math.sqrt(Math.pow(Yc-y,2)+Math.pow(Xc-x,2));
if(d>r){
System.out.println("outside the cirlce");
}
else
{
System.out.println("inside the circle");
}
}
}

