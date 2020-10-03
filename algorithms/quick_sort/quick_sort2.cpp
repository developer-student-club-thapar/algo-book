#include <map>
#include <set>
#include <list>
#include <cmath>
#include <ctime>
#include <deque>
#include <queue>
#include <stack>
#include <bitset>
#include <cstdio>
#include <vector>
#include <cstdlib>
#include <numeric>
#include <sstream>
#include <iostream>
#include <algorithm>


using namespace std;

void printList(list<int> ar){
	for (list<int>::iterator it = ar.begin(); it != ar.end(); it++)
		printf("%d ",*it);
	printf("\n");
}

/* Head ends here */
void quickSort(list <int>  &ar) {
	int pivot = ar.front();
	list<int> before;
	list<int> after;
	for (list<int>::iterator it = ar.begin(); ++it != ar.end();){
		if (*it < pivot)
			before.push_back(*it);
		else if (*it > pivot)
			after.push_back(*it);
	}

	if (before.size() > 1)
		quickSort(before);
	if (after.size() > 1)
		quickSort(after);
	
	ar.assign(before.begin(),before.end());
	ar.push_back(pivot);
	ar.splice(ar.end(), after);

	printList(ar);
}
/* Tail starts here */
int main(void) {
	list <int>  _ar;
	int _ar_size;
	cin >> _ar_size;
	for(int _ar_i=0; _ar_i<_ar_size; _ar_i++) {
		int _ar_tmp;
		cin >> _ar_tmp;
		_ar.push_back(_ar_tmp); 
	}

	quickSort(_ar);

	return 0;
}
