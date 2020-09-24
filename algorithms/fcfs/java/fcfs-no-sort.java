import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

class Process {
    int pid, at, bt, ct;

    public Process(int pid, int at, int bt) {
        this.pid = pid;
        this.at = at;
        this.bt = bt;
        this.ct = 0;
    }
}

class fcfs {
    public static void main(String[] args) {
        ArrayList<Process> proc = new ArrayList<Process>(
                Arrays.asList(new Process(0, 1, 5), new Process(1, 0, 5), new Process(2, 0, 2), new Process(3, 2, 4)));
        float ta = 0, w = 0;
        ArrayList<Boolean> fin = new ArrayList<Boolean>(Collections.nCopies(proc.size(), false));

        int max = Collections.max(proc, (Process a, Process b) -> {
            if (a.at < b.at)
                return -1;
            return 1;
        }).at + 1;
        int time = 0, end = 0;

        while (end < proc.size()) {
            int idx = 0, min = max;
            for (int i = 0; i < proc.size(); i++)
                if (!fin.get(i) && proc.get(i).at < min) {
                    min = proc.get(i).at;
                    idx = i;
                }
            if (time < proc.get(idx).at)
                time = proc.get(idx).at;
            fin.set(idx, true);
            time += proc.get(idx).bt;
            proc.get(idx).ct = time;
            end++;
            ta += proc.get(idx).ct - proc.get(idx).at;
            w += proc.get(idx).ct - (proc.get(idx).at + proc.get(idx).bt);
        }

        System.out.println("PID\tAT\tBT\tCT\tTAT\tWT");
        for (Process p : proc) {
            System.out.println(p.pid + "\t" + p.at + '\t' + p.bt + '\t' + p.ct + '\t' + (p.ct - p.at) + '\t'
                    + (p.ct - (p.at + p.bt)));
        }
        System.out.println("Avg. TAT: " + ta / proc.size());
        System.out.println("Avg. WT: " + w / proc.size());
    }
}