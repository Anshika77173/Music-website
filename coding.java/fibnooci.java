import java.util.Scanner;
class  fibnooci{
    public static void main(String args[]){
        Scanner s = new Scanner(System.in);
System.out.println("enter the value ");
int n = s.nextInt();
int a=0;
int b = 1;
for(int i=0;i<=n;i++){
    System.out.print(a+ " ");
    int c = a+b;
    a=b;
     b=c;

}
         
    }
}