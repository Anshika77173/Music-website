import java.util.Scanner;
class rectangle{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the length of rectangle :");
        double x = sc.nextDouble();
        System.out.println("enter the breadth of rectangle ");
        double y = sc.nextDouble();
        if(x==y){
            System.out.println("square is formed");
        }
        else
        {
            System.out.println("rectangle is formed");
        }

    }
}