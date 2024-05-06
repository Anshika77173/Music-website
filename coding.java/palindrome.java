import java.util.Scanner;
    class palindrome{
        public static void main(String[] args){
            Scanner s = new Scanner(System.in);
            System.out.print("enter a number");
            int n= s.nextInt();
            int c =n;
            int y =0;
            while(c!=0){
                int r =c%10;
                 y = (y*10)+r;
                 c = c/10;
            }
                 if(c ==y ){
                    System.out.print("number is prime"+c);
                 }
                 else{
                    System.out.print("not palindome"+c);
                 }


            }
        }
    