#include <iostream>

struct Process {
	unsigned int pid;
	unsigned int at;
	unsigned int bt;
	unsigned int ct;
};

// ------------------------------------------------------
// Finding the waiting and turn around time, after sorting, and computing the
// completion time.
void findCompletionTime(Process proc[], int n) {
	bool fin[n] = {false};
	unsigned end = 0, time = 0;
	unsigned idx = 0;
	unsigned lastArrival = 1;
	for (int i = 0; i < n; i++)
		if (proc[i].at > lastArrival)
			lastArrival = proc[i].at + 1;
	while (end < n) {
		unsigned min = lastArrival;
		for (int i = 0; i < n; i++)
			if (!fin[i] && min > proc[i].at) {
				min = proc[i].at;
				idx = proc[i].pid;
			}
		if (time < min)
			time = min;
		fin[idx] = true;
		time += proc[idx].bt;
		proc[idx].ct = time;
		end++;
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
		{.pid = 0, .at = 5, .bt = 2, .ct = 0},
		{.pid = 1, .at = 5, .bt = 3, .ct = 0},
		{.pid = 2, .at = 1, .bt = 4, .ct = 0},
		{.pid = 3, .at = 2, .bt = 2, .ct = 0},
		{.pid = 4, .at = 1, .bt = 2, .ct = 0},
		{.pid = 5, .at = 1, .bt = 1, .ct = 0}
	};

	findAvgTime(proc, 6);

	std::cout << '\n';
	return 0;
}
