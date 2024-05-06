import java.util.Scanner;
public class area{
public static void main(String[] args){
Scanner s = new Scanner(System.in);
System.out.println("enter radius of circle ");
double x = s.nextDouble();
double A = (3.14*x*x);
System.out.println("area of circle is " + A);

double p = 2*3.14*x;
System.out.println("perimeter of circle is " +p);


}
}