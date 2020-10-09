#include <iostream>

struct Process {
	unsigned int pid;
	unsigned int at;
	unsigned int bt;
	unsigned int ct;
};

// ------------------------------------------------------
// Merge Sort implementation to sort the Process array of structs according to
// the arrival time, to give a correct output

void merge(Process proc[], int l, int m, int r,
		bool func(const Process &, const Process &)) {
	int l1 = m - l + 1;
	int l2 = r - m;
	Process L[l1], R[l2];

	for (int i = 0; i < l1; i++)
		L[i] = proc[l + i];
	for (int i = 0; i < l2; i++)
		R[i] = proc[m + 1 + i];

	int i = 0, j = 0;
	int k = l;
	while (i < l1 && j < l2)
		if (func(L[i], R[j]))
			proc[k++] = L[i++];
		else
			proc[k++] = R[j++];
	while (i < l1)
		proc[k++] = L[i++];
}

void mergeSort(Process proc[], int l, int r,
		bool func(const Process &, const Process &)) {
	if (l < r) {
		int m = l + (r - l) / 2;
		mergeSort(proc, l, m, func);
		mergeSort(proc, (m + 1), r, func);

		merge(proc, l, m, r, func);
	}
}

// ------------------------------------------------------
// Finding the waiting and turn around time, after sorting, and computing the
// completion time.
void findCompletionTime(Process proc[], int n) {
	for (int i = 0; i < n; i++)
		if (i == 0 || proc[i].at > proc[i - 1].ct)
			proc[i].ct = proc[i].at + proc[i].bt;
		else
			proc[i].ct = proc[i - 1].ct + proc[i].bt;
}

void findAvgTime(Process proc[], int n) {
	mergeSort(proc, 0, n - 1,
			[](const Process &a, const Process &b) {
			return a.at <= b.at;
			}
		 );
	findCompletionTime(proc, n);
	mergeSort(proc, 0, n - 1,
			[](const Process &a, const Process &b) {
			return a.pid < b.pid;
			}
		 );

	float ta{0}, w{0};

	std::cout << "PID\tAT\tBT\tCT\tTAT\tWT\n";
	for (int i = 0; i < n; i++) {
		unsigned pTA = proc[i].ct - proc[i].at;
		unsigned pW = pTA - proc[i].bt;
		std::cout << proc[i].pid << '\t' << proc[i].at << '\t'
			<< proc[i].bt << '\t' << proc[i].ct << '\t'
			<< pTA << '\t' << pW << '\n';
		ta += (float) pTA / n;
		w += (float) pW / n;
	}

	std::cout << std::endl;
	std::cout << "Average Waiting Time: " << w << '\n' 
		<< "Average Turn-Around Time: " << ta << '\n';
}

// ------------------------------------------------------
// Driver for the program

int main() {
	Process proc[6] = {
		{0, 5, 2, 0},
		{1, 5, 3, 0},
		{2, 1, 4, 0},
		{3, 2, 2, 0},
		{4, 1, 2, 0},
		{5, 1, 1, 0}
	};

	findAvgTime(proc, 6);

	std::cout << '\n';
	return 0;
}
