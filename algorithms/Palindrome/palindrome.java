import java.util.*;   
class Palindrome 
{  
   public static void main(String args[])  
   {  
      // String variable 'original' will be used to take input from the user.
      // String variable 'reverse' will be used to store contents of 
      // 'original' variable in reverse order.
      String original, reverse = ""; 
      Scanner in = new Scanner(System.in);   
      System.out.println("Enter a string or a number: ");  
      original = in.nextLine();   
      int length = original.length();   
      for ( int i = length - 1; i >= 0; i-- )  
         reverse = reverse + original.charAt(i);
         
      // Here we check whether the contents of 
      // 'original' variable and 'reverse' variable are equal or not.    
      if (original.equals(reverse))  
         System.out.println("Entered string or number is a palindrome.");  
      else  
         System.out.println("Entered string or number is not a palindrome.");   
   }  
}  