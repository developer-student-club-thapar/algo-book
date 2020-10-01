#include <iostream>
#include <vector>
#include <algorithm>

struct Process {
	unsigned pid;
	unsigned at;
	unsigned bt;
	unsigned ct;
};

// ------------------------------------------------------
// SJF Algo Implementation

void findCompletionTime(std::vector<Process> &proc) {
	unsigned count = proc.size();

	proc[0].ct = proc[0].at + proc[0].bt;

	unsigned fin = 1, time = proc[0].ct;
	unsigned maxBT = std::max_element(
			proc.begin(),
			proc.end(),
			[] (const Process &a, const Process &b) -> bool {
			return a.bt < b.bt;
			})->bt;

	while (fin < count) {
		int idx = -1;
		unsigned min = maxBT;
		for (int i = 1; i < count; i++) {
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
			for (int i = 0; i < count; i++)
				if (proc[i].at > time) {
					time = proc[i].at;
					idx = i;
					break;
				}
		time += proc[idx].bt;
		proc[idx].ct = time;
		fin++;
	}
}

void findAvgTime(std::vector<Process> &proc) {
	std::sort(
			proc.begin(),
			proc.end(),
			[](const Process &a, const Process &b) {
			return a.bt < b.bt;
			});
	std::sort(
			proc.begin(),
			proc.end(),
			[](const Process &a, const Process &b) {
			return a.at < b.at;
			});
	findCompletionTime(proc);
	std::sort(
			proc.begin(),
			proc.end(),
			[](const Process &a, const Process &b) {
			return a.pid < b.pid;
			});

	float ta{0}, w{0};

	std::cout << "PID\tAT\tBT\tCT\tTAT\tWT\n";
	for (const auto &p: proc) {
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

int main() {
	std::vector<Process> proc = {
		{0, 13, 2, 0},
		{1, 5, 1, 0},
		{2, 2, 3, 0},
		{3, 1, 1, 0},
		{4, 0, 4, 0}
	};

	findAvgTime(proc);

	std::cout << '\n';
	return 0;
}
