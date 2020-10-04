#include <iostream>
#include <vector>
#include <algorithm>

struct Process {
	unsigned int pid;
	unsigned int at;
	unsigned int bt;
	unsigned int ct;
};

// ------------------------------------------------------
// Finding the waiting and turn around time, after computing the
// completion time.

void findCompletionTime(std::vector<Process> &proc) {
	unsigned count = proc.size();
	std::vector<bool> fin(count, true);
	unsigned end = 0, time = 0;
	unsigned idx = 0;
	unsigned lastArrival = std::max_element(
			proc.begin(),
			proc.end(),
			[] (const Process &a, const Process &b) -> bool {
			return a.at < b.at;
			})->at + 1;
	while(end < count) {
		unsigned min = lastArrival;
		for(auto &p: proc)
			if (fin[p.pid] && min > p.at) {
				min = p.at;
				idx = p.pid;
			}
		if (time < min)
			time = min;
		fin[idx] = false;
		time += proc[idx].bt;
		proc[idx].ct = time;
		end++;
	}
}

void findAvgTime(std::vector<Process> &proc) {
	findCompletionTime(proc);

	float ta{0}, w{0};

	std::cout << "PID\tAT\tBT\tCT\tTAT\tWT\n";
	for (auto &p: proc) {
		unsigned pTA = p.ct - p.at;
		unsigned pW = pTA - p.bt;
		std::cout << p.pid << '\t' << p.at << '\t'
			<< p.bt << '\t' << p.ct << '\t'
			<< pTA << '\t' << pW << '\n';
		ta += pTA;
		w += pW;
	}

	ta /= proc.size();
	w /= proc.size();

	std::cout << std::endl;
	std::cout << "Average Waiting Time: " << w << '\n' 
		<< "Average Turn-Around Time: " << ta << '\n';
}

// ------------------------------------------------------
// Driver for the program

int main() {
	std::vector<Process> proc = {
		{0, 5, 2, 0},
		{1, 5, 3, 0},
		{2, 1, 4, 0},
		{3, 2, 2, 0},
		{4, 1, 2, 0},
		{5, 1, 1, 0}
	};

	findAvgTime(proc);

	std::cout << '\n';
	return 0;
}
