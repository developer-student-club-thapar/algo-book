import strformat, sugar, algorithm

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

proc min(x: openArray[Process]): Process = 
  result = x[0]
  for i in 1..high(x):
    if result.at > x[i].at: result = x[i]

proc `==`[T](x, y: openArray[T]): bool =
  if x.pid == y.pid: true
  else: false

proc findCompletionTime(): void =
  prc[0].ct = prc[0].at + prc[0].bt
  var
    maxBT = max(prc)
    time = prc[0].ct
    count = 1
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
        idx = find(prc, p)
    if idx == -1:
      var p = min(collect(newSeq, (for p in prc:
        if p.at > time: p)))
      time = p.at
      for i in 1..high(prc):
        if p.pid == prc[i].pid:
          idx = i
    time += prc[idx].bt
    prc[idx].ct = time
    count += 1

prc.sort(proc (x, y: Process): int =
  if x.bt > y.bt: 1
  else: -1
)
prc.sort(proc (x, y: Process): int =
  if x.at > y.at: 1
  else: -1
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
