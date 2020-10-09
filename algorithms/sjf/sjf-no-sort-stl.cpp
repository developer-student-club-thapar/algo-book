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
	unsigned fin = 0, time = 0;
	unsigned maxBT = std::max_element(
			proc.begin(),
			proc.end(),
			[] (const Process &a, const Process &b) -> bool {
			return a.bt < b.bt;
			})->bt;

	std::vector<unsigned> rem;
	std::for_each(proc.begin(), proc.end(),
			[&] (const Process p){
			rem.push_back(p.bt);
			});

	while (fin < count) {
		int idx = -1;
		unsigned min = maxBT;
		for (const auto &p: proc) {
			int pos = p.pid;
			if (rem[pos] && rem[pos] <= min && p.at <= time) {
				if (
					idx != -1 && rem[pos] == min &&
					p.at >= proc[idx].at
				   )
					continue;
				min = p.bt;
				idx = pos;
			}
		}
		if (idx == -1) {
			time++;
			continue;
		}
		time += rem[idx];
		proc[idx].ct = time;
		rem[idx] = 0;
		fin++;
	}
}

void findAvgTime(std::vector<Process> &proc) {
	findCompletionTime(proc);

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
