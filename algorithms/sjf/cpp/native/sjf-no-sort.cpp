#include <iostream>

struct Process {
	unsigned pid;
	unsigned at;
	unsigned bt;
	unsigned ct;
};

// ------------------------------------------------------
// SJF Algo Implementation

void findCompletionTime(Process proc[], int n) {
	int fin = 0;
	unsigned time = 0, maxBT = 0;
	unsigned rem[n];
	for (int i = 0; i < n; i++) {
		rem[i] = proc[i].bt;
		if (maxBT < proc[i].bt)
			maxBT = proc[i].bt;
	}

	while (fin < n) {
		int idx = -1;
		unsigned min = maxBT;
		for (int i = 0; i < n; i++) {
			if (rem[i] && rem[i] <= min && proc[i].at <= time) {
				if (
					idx != -1 && rem[i] == min &&
					proc[i].at >= proc[idx].at
				   )
					continue;
				min = rem[i];
				idx = i;
			}
		}
		if (idx == -1) {
			unsigned newTime = 0;
			for (int i = 0; i < n; i++) {
				if (newTime && newTime < proc[i].at)
					continue;
				else if (rem[i] && proc[i].at > time) {
					newTime = proc[i].at;
					idx = i;
				}
			}
			time = newTime;
		}
		time += rem[idx];
		proc[idx].ct = time;
		rem[idx] = 0;
		fin++;
	}
}

void findAvgTime(Process proc[], int n) {
	findCompletionTime(proc, n);

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
		{0, 9, 2, 0},
		{1, 5, 1, 0},
		{2, 2, 1, 0},
		{3, 1, 1, 0},
		{4, 0, 4, 0}
	};

	findAvgTime(proc, 5);

	std::cout << '\n';
	return 0;
}
