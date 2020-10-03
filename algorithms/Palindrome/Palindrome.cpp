#include <iostream>
#include <string>

using namespace std;


int main(){
	int num, len;
	string str, reversed;


	cout << "Enter a positive integer: ";
	cin >> num;

	str = to_string(num);
	reversed = str;

	len = reversed.length();
	for (int i = 0; i < len / 2; i++){
        swap(reversed[i], reversed[len - i - 1]); 
	}

	if (reversed == str) {
		cout << "The Number entered was a Palindrome" << endl;
	} else { 
		cout << "The Number entered was NOT a Palindrome" << endl; 
	}

	system("pause");
	return 0;
} 