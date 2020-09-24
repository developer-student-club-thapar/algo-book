import strformat, sequtils

type
  Process = object
    pid: Natural
    at: Natural
    bt: Natural
    ct: Natural

var prc = @[Process(pid: 0, at: 5, bt: 3, ct: 0), Process(pid: 1, at: 2, bt: 1, ct: 0),
            Process(pid: 2, at: 0, bt: 1, ct: 0), Process(pid: 3, at: 4, bt: 2, ct: 0),
            Process(pid: 4, at: 0, bt: 2, ct: 0), Process(pid: 5, at: 2, bt: 3, ct: 0)]
var ta, w = 0.0

proc max(x: openArray[Process]): int =
  result = x[0].bt
  for i in 1..high(x):
    if result < x[i].bt: result = x[i].bt

proc `<`(x, y: Process): bool =
  if x.at < y.at: true
  else: false

proc findCompletionTime(): void =
  var
    maxBT = max(prc)
    time, count = 0
  while count < len(prc):
    var
      idx = -1
      minBT = maxBT
    for p in prc:
      if (p.ct == 0) and (p.bt <= minBT) and (p.at <= time):
        if idx != -1 and
          p.bt == minBT and p.at >= prc[idx].at:
            continue
        minBT = p.bt
        idx = p.pid
    if idx == -1:
      idx = minIndex(prc.filterIt(it.at > time))
      time = prc[idx].at
    time += prc[idx].bt
    prc[idx].ct = time
    count += 1

findCompletionTime()

echo "PID\tAT\tBT\tCT\tTAT\tWT"
for p in prc:
  let pTA = (float)(p.ct - p.at)
  let pW = pTA - (float)(p.bt)
  echo &"{p.pid}\t{p.at}\t{p.bt}\t{p.ct}\t{(int)pTA}\t{(int)pW}"
  ta += pTA / (float)(len(prc))
  w += pW / (float)(len(prc))

echo &"Avg. TAT: {ta:.3f}"
echo &"Avg. WT: {w:.3f}"
