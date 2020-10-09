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
var ta = 0.0
var w = 0.0

proc `<`(x, y: Process): bool =
  if x.at < y.at:
    true
  else:
    false

proc findCompletionTime(): void =
  var fin = newSeq[bool](len(prc))
  var time = 0
  var idx = 0
  var over = 0
  var lastArrival = max(prc).at + 1
  while over < len(prc):
    var curr = lastArrival
    for p in zip(fin, prc):
      if (not p[0] and p[1].at < curr):
        curr = p[1].at
        idx = p[1].pid
    if (time < prc[idx].at):
      time = prc[idx].at
    fin[idx] = true
    time += prc[idx].bt
    prc[idx].ct = time
    over += 1

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
