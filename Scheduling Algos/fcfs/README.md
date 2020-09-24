# First Come First Serve

## Purpose of the algo
This algorithm is a CPU scheduling technique, which allocates CPU time, on the basis of arrival time of process.

It is used to handle execution of processes, and their order, though now it is considered an out-dated process, it is still important to understand the basics.

A real world example of this algorithm would be the sale of tickets. The person to arrive first will get their ticket first.

## Pre-Requisites
- **OS Concepts**
  - Scheduling
  - Arrival Time, Burst time, and other keywords, and the logic for them

## Implementation Languages
- **C++**
- **Python**
- **Java**
- **Nim**

## Explanation
The algorithm can be implemented in two methods:-

1. By sorting
   - We sort the processes by arrival time (Standard functions or self implementations, the sorting method should be [**stable**](https://www.geeksforgeeks.org/stability-in-sorting-algorithms/ "Stability in Sorting Algos")).
   - We call the function `findCompletionTime`.
   - If the completion time of previous process is *less* than the **arrival** time of the current one, we add the current process's, arrival and burst time.
   - Else we add previous completion time, and current burst time.
   - On iteration finish, we display the output in same order as input given by user, meaning we display output after a **PID** sort.

2. Without sorting
   - The last (max) arrival time incremented by 1 is stored, in `lastArrival`, and the time is maintained using `time` variable.
   - Iterate over array of processes, and pick the process with smallest arrival time, still not executed.
   - If arrival time is greater than `time`, then change time to arrival time.
   - Update `time`, by adding burst time, and setting completion status of process as done.
   - Update `end` variable by incrementing by 1.
   - Repeat till `end` is not equal to number of processes.

- The turn-around time is found by calculating the difference between, completion and arrival time, and waiting time by calculating difference between turn-around and burst time.
- After the above steps have been executed, iterate over array to output the **PID**, arrival, burst, completion, turn-around, and waiting time.
- Calculate the average of turn around, and waiting time, and print to screen.

## Pseudo-Code
- **Sorting**
```
  Begin
    findCompletionTime(proc):
      while (i < Number of process):
        if arrivalNow > completePrev
          completeNow = arrivalNow + burstNow
        else
          completeNow = completePrev + burstNow
        end
    end
    
    findAvgTime(proc):
      stableSort(proc, arrival)
      findCompletionTime(proc)
      sort(proc, pid)
      while(i < Number of process):
        turnAround = completeTime - arrival
        waitTime = turnAround - burst
        display process info
      end
      Calculate average of total turnAround and waitTime
      display average
    end
```

- **No sorting**
```
  Begin
    findCompletionTime(proc):
      while (complete < Number of process):
        find minimum arrival time, with execution status false
        if time < min
          time = min
        time = time + burstTime
        set status of execution true
        complete = complete + 1
      end
    end
    
    findAvgTime(proc):
      findCompletionTime(proc)
      while(i < Number of process):
        turnAround = completeTime - arrival
        waitTime = turnAround - burst
        display process info
      end
      Calculate average of total turnAround and waitTime
      display average
    end
```

## External content
A [theoretical example](https://www.guru99.com/fcfs-scheduling.html "FCFS Solved Example") of the **First Come First Serve algorithm** is provided at the link.

To start with the **Nim** language, [go here](https://nim-lang.org/docs/tut1.html "Nim official tutorial").

For people with no experience in programming, follow this [tutorial](https://narimiran.github.io/nim-basics/ "Nim Basics Tutorial") to **Nim**.

***