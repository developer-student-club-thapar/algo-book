import algorithm, strformat

type
  Process = object
    pid: Natural
    at: Natural
    bt: Natural
    ct: Natural
  
var prc = @[Process(pid: 0, at: 5, bt: 3, ct: 0), Process(pid: 1, at: 2, bt: 1, ct: 0),
            Process(pid: 2, at: 0, bt: 1, ct: 0), Process(pid: 3, at: 4, bt: 2, ct: 0),
            Process(pid: 4, at: 0, bt: 2, ct: 0), Process(pid: 5, at: 2, bt: 3, ct: 0)]
var ta = 0.0
var w = 0.0

proc findCompletionTime(): void =
  for i in countup(0, len(prc) - 1):
    if i == 0 or prc[i].at > prc[i - 1].ct:
      prc[i].ct = prc[i].at + prc[i].bt
    else:
      prc[i].ct = prc[i - 1].ct + prc[i].bt

prc.sort(proc (x, y: Process): int =
  if x.at > y.at: 1
  else: 0
)
findCompletionTime()
prc.sort(proc (x, y: Process): int =
  if x.pid > y.pid: 1
  else: 0
)

echo "PID\tAT\tBT\tCT\tTAT\tWT"
for p in prc:
  let pTA = (float)(p.ct - p.at)
  let pW = pTA - (float)(p.bt)
  echo &"{p.pid}\t{p.at}\t{p.bt}\t{p.ct}\t{(int)pTA}\t{(int)pW}"
  ta += pTA / (float)(len(prc))
  w += pW / (float)(len(prc))

echo &"Avg. TAT: {ta:.3f}"
echo &"Avg. WT: {w:.3f}"
