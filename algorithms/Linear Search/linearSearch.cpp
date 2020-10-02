#include <iostream>
#include <vector>
using namespace std;

bool linearSearch(vector<int> v, int x) {
    // iterating through the full array checking each element to see if it is "x"
	for (int i=0;i<v.size();i++) {
		if (x == ele) {
			return i;
		}
	}
	return -1;
}

int main() {
    
	vector<int> v{ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610};
	cout<<linearSearch(v, 55); // 10
    cout<<linearSearch(v, 6); // -1
	return 0;
}