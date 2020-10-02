/* #this is a program to check armstrong number */
import java.util.*;
class armstrong()
{
    public static void main()
    {
        Scanner sc=new Scanner (System.in);
        int num=sc.nextInt();
        /* to seperate the numbers into digits */
        temp=num;
        while(temp>0)
        {
            d=temp%10;
            temp=temp/10;
            sum=sum+ d*d*d;
        }
        if(sum==num)
        {
            System.out.println("Number is Armstrong");
        }
        else
        System.out.println("Number is not an Armstrong number");
    }
}
