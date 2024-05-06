import java.util.Scanner;
class  patteren{
    public static void main(String args[]){
        Scanner s = new Scanner(System.in);
System.out.println("enter a number");
int n =s.nextInt();
System.out.println("enter another value");
int m = s.nextInt();
/*for(int i=1;i<=n;i++){
     for(int j=1;j<=m;j++){
        System.out.print("*");
     }
     System.out.println();
}*/
for(int i=1;i<=n;i++){
for (int j=1;j<=m;j++){
if(i==1||j==1||i==n||j==m){
System.out.print("*");
}
else{
System.out.print(" ");
}
}
System.out.println();
  }                                      

    }
}
