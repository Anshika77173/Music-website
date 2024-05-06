import java.util.Scanner;
class c2{
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        System.out.println("enter a number");
        int n = s.nextInt();
    
        int r;
        int i=1;
        int y =0;

        while(n!=0){
            r = n%10;
             
              y = y + r*i;
              i=i*2;
              n=n/10;
            
           System.out.print(y);
           

        }
        
    }
}

