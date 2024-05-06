import java.util.Scanner;
class c1{
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
System.out.println("enter n");
        int n = sc.nextInt();
        double fact=1;
        for(int i=1;i<=n;i++){
            fact= fact*i;
            double sum =0;
            if(i%2==0){
                 sum = sum -fact;
                System.out.println(sum);
            }
            else {
            sum = sum + fact;
            System.out.println(sum);
            
            }
             System.out.println("1/"+i);
        }
}
}