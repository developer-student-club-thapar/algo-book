
#include <stdio.h>
#include <string.h>

void reverse(char s[]) {
	int c, i , j;
	for (i = 0, j = strlen(s)-1; i < j; i++, j--) {
		c = s[i];
		s[i] = s[j];
		s[j] = c;
	}
	return;
}

int main() {
	char a[200];
  gets(a);
	char b[200];
	
	strcpy(b,a);
	reverse(a);
	
	if(strcmp(a, b) == 0) {
		printf("The string is a Palindrome\n");
	} else {
		printf("The string is not a Palindrome\n");
	}
	return 0;
}
