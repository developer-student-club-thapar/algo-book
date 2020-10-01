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
	for(auto &p: proc)
		if (p.at > (&p - 1)->ct)
			p.ct = p.at + p.bt;
		else
			p.ct = (&p - 1)->ct + p.bt;
}

void findAvgTime(std::vector<Process> &proc) {
	std::sort(
			proc.begin(),
			proc.end(),
			[](const Process &a, const Process &b) {
			return a.at < b.at;
			}
		 );
	findCompletionTime(proc);
	std::sort(
			proc.begin(),
			proc.end(),
			[](const Process &a, const Process &b) {
			return a.pid < b.pid;
			}
		 );

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
