import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

class Process {
    int pid, at, bt, ct;

    public Process(int pid, int at, int bt) {
        this.pid = pid;
        this.at = at;
        this.bt = bt;
        this.ct = 0;
    }
}

class sjf {
    public static void main(String[] args) {
        ArrayList<Process> proc = new ArrayList<Process>(
                Arrays.asList(new Process(0, 1, 5), new Process(1, 0, 5), new Process(2, 0, 2), new Process(3, 2, 4)));
        float ta = 0, w = 0;

        int maxBT = Collections.max(proc, (a, b) -> (a.bt < b.bt) ? -1 : 1).bt;
        int end = 0, time = 0;
        while (end < proc.size()) {
            int idx = -1, minBT = maxBT;
            for (Process p : proc) {
                if ((p.ct == 0) && (p.bt <= minBT) && (p.at <= time)) {
                    if ((idx != -1) && (p.bt == minBT) && (p.at >= proc.get(idx).at))
                        continue;
                    minBT = p.bt;
                    idx = p.pid;
                }
            }
            if (idx == -1) {
                final int curr = time;
                idx = Collections.min(proc.stream().filter(p -> (p.at > curr)).collect(Collectors.toList()),
                        (a, b) -> (a.at < b.at) ? 1 : -1).pid;
                time = proc.get(idx).at;
            }
            time += proc.get(idx).bt;
            proc.get(idx).ct = time;
            end++;
            ta += time - proc.get(idx).at;
            w += time - (proc.get(idx).at + proc.get(idx).bt);
        }

        System.out.println("PID\tAT\tBT\tCT\tTAT\tWT");
        proc.forEach(p -> System.out.println(p.pid + "\t" + p.at + '\t' + p.bt + '\t' + p.ct + '\t' + (p.ct - p.at)
                + '\t' + (p.ct - (p.at + p.bt))));
        System.out.println("Avg. TAT: " + ta / proc.size());
        System.out.println("Avg. WT: " + w / proc.size());
    }
}