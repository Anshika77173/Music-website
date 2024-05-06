import java.util.Scanner;
class c1 extends Thread{
    String str1[] = {"How many time zones are there in russia ",
                     "How many stripes are there in us flag",
                     "what is the national animal of Australia",
                     "what is the national flower of japan",
                     "what is the smallest country in the world"};
           String flip="what is the capital of india"; 
           String flipoption="1)new delhi 2) london 3) berlin 4) rome";         
      String str2[] ={"1)11 2)12 3)56 4)43",
                        "1)11 2)43 3)13 4)42",
                        "1) Red kangaroo 2)kangroo 3)fish 4)Anaconda",
                        "1)lotus 2) cherry blossom 3) white lily 4)sun flower",
                        "1)the vatican 2)goa 3) mnipuur 4)punjab"
                                }  ; 
      String str3[] = {"1","3","1","1"};
      String flipanser="1";
      int flag =0,flag1=0,flag2=0;
      int right =0;
      int wrong =0;
      int skip =0;
      int i;
      public void  run(){
        for( i =0;i<str1.length;i++){
            System.out.println("Question"+(i+1)+":"+str1[i]);
            System.out.println(str2[i]);
            System.out.print("enter your anser:  ");
            c2 p = new c2(this);
            p.start();
            this.suspend();
        }
            System.out.println("Quiz summary");
            System.out.println("correct anser"+right);
            System.out.println("Wrong anser"+wrong);
            System.out.println("Skipped anser"+skip);
            
            

        
      }                 



}
class c2 extends Thread{
    Scanner s = new Scanner(System.in);
    c1 w;
    c2(c1 p){
        w =p;
    }
    public void run(){
        String asd = s.nextLine();
        String asd="";
        if(asd.equals(w.str3[w.i])){
            w.right++;
        }
        else if(asd.equals("5")){
            w.skip++;
        }
        else if(asd.equals("6")){
            c3 d = new c3(this,w);
            d.start();
            this.stop();
        }
        else{
            w.wrong++;
        }
        w.resume();
    }
} 
class c3 extends Thread{
  c2 t;
  c1 b;
  public c3(c2 p, c1 w){
    t=p;
    b=w;

  }
  public void menu(){
    System.out.println("\n1 for 50:50\n2 for flip\n3 for hint");

  }
  public void run(){
    menu();
    Scanner sc = new Scanner(System.in);
    int k =sc.nextInt();
    if(b.flag==0){
        if(k==1){
            if(b.str3[b.i]=="1"){
                System.out.println("1)new delhi  2)london");
            }
            else if(b.str3[b.i]=="2"){
                System.out.println("2)london 3)berlin");
            }
            else if(b.str3[b.i]=="3"){
                System.out.println("3)berlin 4)Rome");
            }
            b.flag=1;
            
        }
    }
    else{
        System.out.println("cannot take 50:50");
    }
    c2 v =new c2(b);
    v.start();
  }
}
class quiz{
    public static void main(String[] args){
        c1 p = new c1();
        p.start();
    }
}
