class command{
public  static void main(String[] args){
int x,y,z;
x=Integer.parseInt(args[0]);
y=Integer.parseInt(args[1]);
z=x;
x=y;
y=z;
System.out.println("x = " +x +"  y =" + y);
}
}