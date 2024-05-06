import java.util.Scanner;
public class swap{
public static void main(String[] args){
S
canner s = new Scanner(System.in);System.out.println("enter first number");
int x = s.nextInt();
System.out.println("enter second number");
int y =s.nextInt();
int z;
z=x;
x=y;
y=z;
System.out.println("x = " + x + " and y = " + y);
}
}