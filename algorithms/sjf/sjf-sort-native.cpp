#include <iostream>

struct Process {
	unsigned pid;
	unsigned at;
	unsigned bt;
	unsigned ct;
};

// ------------------------------------------------------
// Merge Sort implementation to sort the Process array of structs according to
// the arrival time, to give a correct output

bool aSort(const Process &a, const Process &b) {
	return a.at <= b.at;
}
bool bSort(const Process &a, const Process &b) {
	return a.bt <= b.bt;
}
bool pidSort(const Process &a, const Process &b) {
	return a.pid < b.pid;
}

void merge(Process proc[], int l, int m, int r,
		bool comp(const Process &, const Process &)) {
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
		if (comp(L[i], R[j]))
			proc[k++] = L[i++];
		else
			proc[k++] = R[j++];
	while (i < l1)
		proc[k++] = L[i++];
}

void mergeSort(Process proc[], int l, int r,
		bool comp(const Process &, const Process &)) {
	if (l < r) {
		int m = l + (r - l) / 2;
		mergeSort(proc, l, m, comp);
		mergeSort(proc, (m + 1), r, comp);

		merge(proc, l, m, r, comp);
	}
}

// ------------------------------------------------------
// SJF Algo Implementation

void findCompletionTime(Process proc[], int n) {
	int fin = 1;

	proc[0].ct = proc[0].at + proc[0].bt;
	unsigned time = proc[0].ct, maxBT = proc[0].bt;

	for (int i = 1; i < n; i++)
		if (maxBT < proc[i].bt)
			maxBT = proc[i].bt;

	while (fin < n) {
		unsigned min = maxBT;
		int idx = -1;
		for (int i = 1; i < n; i++) {
			if (!proc[i].ct && proc[i].bt <= min && proc[i].at <= time) {
				if (
					idx != -1 && proc[i].bt == min &&
					proc[i].at >= proc[idx].at
				   )
					continue;
				min = proc[i].bt;
				idx = i;
			}
		}
		if (idx == -1)
			for (int i = 1; i < n; i++)
				if (proc[i].at >= time) {
					time = proc[i].at;
					idx = i;
					break;
				}
		time += proc[idx].bt;
		proc[idx].ct = time;
		fin++;
	}
}

void findAvgTime(Process proc[], int n) {
	mergeSort(proc, 0, n - 1, bSort);
	mergeSort(proc, 0, n - 1, aSort);
	findCompletionTime(proc, n);
	mergeSort(proc, 0, n - 1, pidSort);

	float ta{0}, w{0};

	std::cout << "PID\tAT\tBT\tCT\tTAT\tWT\n";
	for (int i = 0; i < n; i++) {
		unsigned pTA = proc[i].ct - proc[i].at;
		unsigned pW = pTA - proc[i].bt;
		std::cout << proc[i].pid << '\t' << proc[i].at << '\t'
			<< proc[i].bt << '\t' << proc[i].ct << '\t'
			<< pTA << '\t' << pW << '\n';
		ta += (float)pTA / n;
		w += (float)pW / n;
	}

	std::cout << std::endl;
	std::cout << "Average Waiting Time: " << w << '\n' 
		<< "Average Turn-Around Time: " << ta << '\n';
}

int main() {
	Process proc[5] = {
		{0, 10, 3, 0},
		{1, 5, 1, 0},
		{2, 2, 2, 0},
		{3, 1, 1, 0},
		{4, 0, 4, 0}
	};

	findAvgTime(proc, 5);

	std::cout << '\n';
	return 0;
}
