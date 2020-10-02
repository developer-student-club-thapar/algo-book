class ArmstrongNumber {

    static boolean isArmstrongNumber(int number) {

        int sum = 0;

        // covert int to char array
        char digits[] = Integer.toString(number).toCharArray();

        for (int i = 0; i < digits.length; i++) {

            // convert char to int
            final int digit = Integer.parseInt(String.valueOf(digits[i]));

            // increase sum
            sum += Math.pow(digit, digits.length);
        }

        return sum == number;
    }

    public static void main(String[] args) {

        int MAX = 1000;

        System.out.println("Firsts Armstrong numbers up to " + MAX + ": ");

        for (int n = 1; n <= MAX; n++) {
            if (isArmstrongNumber(n)) {
                System.out.println(n);
            }
        }

    }
}