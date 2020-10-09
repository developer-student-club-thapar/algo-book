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
        Process proc[] = new Process[] { new Process(0, 1, 5), new Process(1, 0, 5), new Process(2, 0, 2),
                new Process(3, 2, 4) };
        float ta = 0, w = 0;

        Collections.sort(Arrays.asList(proc), (Process a, Process b) -> {
            if (a.at < b.at)
                return -1;
            return 1;
        });
        for (int i = 0; i < proc.length; i++) {
            if (i == 0 || proc[i - 1].ct < proc[i].at)
                proc[i].ct = proc[i].at;
            else
                proc[i].ct = proc[i - 1].ct;
            proc[i].ct += +proc[i].bt;
            ta += proc[i].ct - proc[i].at;
            w += proc[i].ct - (proc[i].at + proc[i].bt);
        }
        Collections.sort(Arrays.asList(proc), (Process a, Process b) -> {
            if (a.pid < b.pid)
                return -1;
            return 1;
        });

        System.out.println("PID\tAT\tBT\tCT\tTAT\tWT");
        for (Process p : proc) {
            System.out.println(p.pid + "\t" + p.at + '\t' + p.bt + '\t' + p.ct + '\t' + (p.ct - p.at) + '\t'
                    + (p.ct - (p.at + p.bt)));
        }
        System.out.println("Avg. TAT: " + ta / proc.length);
        System.out.println("Avg. WT: " + w / proc.length);
    }
}