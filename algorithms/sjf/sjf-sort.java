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
                Arrays.asList(new Process(0, 13, 5), new Process(1, 0, 5), new Process(2, 0, 2), new Process(3, 2, 4)));
        float ta = 0, w = 0;

        Collections.sort(proc, (a, b) -> (a.bt < b.bt) ? -1 : 1);
        Collections.sort(proc, (a, b) -> (a.at < b.at) ? -1 : 1);
        proc.get(0).ct = proc.get(0).at + proc.get(0).bt;

        int maxBT = Collections.max(proc, (a, b) -> (a.bt < b.bt) ? -1 : 1).bt;
        int end = 1, time = proc.get(0).ct;
        while (end < proc.size()) {
            int idx = -1, minBT = maxBT;
            for (int i = 1; i < proc.size(); i++)
                if ((proc.get(i).ct == 0) && (proc.get(i).bt <= minBT) && (proc.get(i).at <= time)) {
                    if ((idx != -1) && proc.get(i).bt == minBT && proc.get(i).at >= proc.get(idx).at)
                        continue;
                    minBT = proc.get(i).bt;
                    idx = i;
                }
            if (idx == -1) {
                final int curr = time;
                var prc = Collections.min(proc.stream().filter(p -> (p.at > curr)).collect(Collectors.toList()),
                        (a, b) -> (a.at < b.at) ? 1 : -1);
                time = prc.at;
                idx = proc.indexOf(prc);
            }
            time += proc.get(idx).bt;
            proc.get(idx).ct = time;
            end++;
            ta += time - proc.get(idx).at;
            w += time - (proc.get(idx).at + proc.get(idx).bt);
        }

        Collections.sort(proc, (a, b) -> (a.pid < b.pid) ? -1 : 1);

        System.out.println("PID\tAT\tBT\tCT\tTAT\tWT");
        proc.forEach(p -> System.out.println(p.pid + "\t" + p.at + '\t' + p.bt + '\t' + p.ct + '\t' + (p.ct - p.at)
                + '\t' + (p.ct - (p.at + p.bt))));
        System.out.println("Avg. TAT: " + ta / proc.size());
        System.out.println("Avg. WT: " + w / proc.size());
    }
}