import java.util.Arrays;

class ExponentialSearch
{

	static int exponentialSearch(int A[],
								int n, int key)
	{
		if (A[0] == key)
			return 0;

		int i = 1;
		while (i < n && A[i] <= key)
			i = i*2;

		return Arrays.binarySearch(A, i/2,
								Math.min(i, n), key);
	}

	public static void main(String args[])
	{
		int A[] = {2, 12, 20, 25, 85, 102, 130};
		int key = 25;
		int result = exponentialSearch(A, A.length, key);

		System.out.println((result < 0) ?
							"Element is not present in array" :
							"Element is present at index " +
                            result);
        key=102;
        result = exponentialSearch(A, A.length, key);

		System.out.println((result < 0) ?
							"Element is not present in array" :
							"Element is present at index " +
                            result);
        key=45;
        result = exponentialSearch(A, A.length, key);

		System.out.println((result < 0) ?
							"Element is not present in array" :
							"Element is present at index " +
							result);
	}
}
