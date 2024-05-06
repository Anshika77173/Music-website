import java.applet.*;
import java.awt.*;
/*<applet class="c1" width=200 height=100></applet>*/
public class c1 extends Applet{
String str = "" ;
public void init(){ 
str ="init";
}
public void start()
{
str = "Start";
}
public void paint(Graphics g){
g.drawString(str,100,100);
}
}

