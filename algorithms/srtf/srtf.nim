import strformat, sequtils, sugar

type
  Process = object
    pid: Natural
    at: Natural
    bt: Natural
    ct: Natural

var prc = @[Process(pid: 0, at: 13, bt: 3, ct: 0), Process(pid: 1, at: 2, bt: 1, ct: 0),
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
    time, fin = 0
    rem = collect(newSeqOfCap(len(prc))):
      for p in prc: p.bt
  while fin < len(prc):
    var
      idx = -1
      minBT = maxBT
    for (r, p) in zip(rem, prc):
      if (r != 0) and (r <= minBT) and (p.at <= time):
        if idx != -1 and
          r == minBT and p.at >= prc[idx].at:
            continue
        minBT = r
        idx = p.pid
    inc(time)
    if idx != -1:
      dec(rem[idx])
      if rem[idx] == 0:
        inc(fin)
        prc[idx].ct = time
        
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
