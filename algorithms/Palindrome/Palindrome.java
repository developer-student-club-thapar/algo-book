import java.util.Scanner;

public class Palindrome {
    private static Scanner scanner = new Scanner( System.in );

    public static void main(String args[]) {
        String str, reversed;
        byte[] strArr, reversedArr;

        System.out.println("Enter a positive integer: ");
        str = scanner.nextLine();

        strArr = str.getBytes(); 
        reversedArr = new byte[strArr.length];
        
        for (int i = 0; i < strArr.length; i++) {
            reversedArr[i] = strArr[strArr.length - i - 1];
        }
        reversed = new String(reversedArr);

        
        if (str.equalsIgnoreCase(reversed)) {
            System.out.println("The Number entered was a Palindrome");
        } else { 
            System.out.println("The Number entered was NOT a Palindrome");
        }
    }
}