import java.io.*;
import java.util.*;

class Radix {

    static int getMax(int A[], int n)
    {
        int Max = A[0];
        for (int i = 1; i < n; i++)
            if (A[i] > Max)
                Max = A[i];
        return Max;
    }


    static void countSort(int A[], int n, int Exp)
    {
        int i;
        int count[] = new int[10];
        Arrays.fill(count,0);

        for (i = 0; i < n; i++)
            count[ (A[i]/Exp)%10 ]++;

        for (i = 1; i < 10; i++)
            count[i] += count[i - 1];

        int output[] = new int[n];

        for (i = n - 1; i >= 0; i--)
        {
            output[count[ (A[i]/Exp)%10 ] - 1] = A[i];
            count[ (A[i]/Exp)%10 ]--;
        }

        for (i = 0; i < n; i++)
            A[i] = output[i];
    }

    static void radixsort(int A[], int n)
    {
        int Max = getMax(A, n);

        int Exp = 1;
        while(Max/Exp >0){
            countSort(A, n, Exp);
            Exp=Exp*10;
        }

    }


    public static void main (String[] args)
    {
        int A[] = {130, 12, 85, 102, 25, 20, 2};
        int n = A.length;
        radixsort(A, n);
        for (int i=0; i<n; i++)
            System.out.print(A[i]+" ");
    }
}
