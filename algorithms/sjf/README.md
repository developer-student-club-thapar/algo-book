# Shortest Job First (Non Pre-emptive)

## Purpose of the algo

This algorithm is a CPU scheduling technique, which allocates CPU time, on the basis of the next shortest burst time out of all processes in the ready queue.

It is used to handle execution of processes, and their order.

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
   
   - We sort the processes, first by burst, then arrival time (Standard functions or self implementations, the sorting method should be [**stable**](https://www.geeksforgeeks.org/stability-in-sorting-algorithms/ "Stability in Sorting Algos")).
   - We call the function `findCompletionTime`.
   - Store the completion time of first process, since no process came before, we know the execution time of this process.
   - Find the largest burst time, irrespective of the arrival time.
   - Iterate over the processes, and find the process with smallest burst time, with arrival time less than current time.
   - If no such process found, find the smallest arrival time, greater than current time.
   - Store completion time as sum of burst and current time. 

2. Without sorting
   
   - The largest (max) burst time is stored, in `maxBT`, and the time is maintained using `time` variable.
   - Iterate over array of processes, and pick the process with smallest burst time, not executed, and arrival time less than current time.
   - If no process found, find smallest arrival time, greater than time. If two found, pick one with smaller burst time.
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
        for i < len
            if at < time and not executed
                minBT = bt
                idx = i
        end
        if idx == -1
            for i < len
                if at > time
                    time, idx = at, i
                end
            end
        end
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
        find minimum burst time, not executed, and at < time
            min = bt
            idx = pid
        set executed
        update ct
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

A [theoretical example](https://www.guru99.com/shortest-job-first-sjf-scheduling.html "SJF Solved Example") of the **SJF Algorithm** is provided at the link.

To start with the **Nim** language, [go here](https://nim-lang.org/docs/tut1.html "Nim official tutorial").

For people with no experience in programming, follow this [tutorial](https://narimiran.github.io/nim-basics/ "Nim Basics Tutorial") to **Nim**.

***
