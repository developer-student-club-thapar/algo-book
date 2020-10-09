# Shortest Remaining Time First

## Purpose of the algo

This algorithm is a CPU scheduling technique, which allocates CPU time, on the basis of shortest remaining burst time of process.

That means it is a pre-emptive algorithm. Hence during execution of one process, if another enters with a shorter burst time, at that given point of time, the shorter one will be executed.

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

The algorithm is implemented in the following manner:-

- The max burst time is stored, in `maxBT`, and the time is maintained using `time` variable.

- Iterate over array of processes, and pick the process with smallest burst time, with arrival time before or equal to that of current time.

- Increment time by 1.

- If process found within given time, then continue to decrement the remaining time of the process by 1.

- If remaining burst time is 0, increment number of completed processes, and store the completion time of process as the time.

- The turn-around time is found by calculating the difference between, completion and arrival time, and waiting time by calculating difference between turn-around and burst time.

- After the above steps have been executed, iterate over array to output the **PID**, arrival, burst, completion, turn-around, and waiting time.

- Calculate the average of turn around, and waiting time, and print to screen.

## Pseudo-Code

- ```
  Begin
  findCompletionTime(proc):
      while (complete < Number of process):
          find minimum burst time, with arrival time <= time
          if rem[i] == min and proc[i].at >= proc[idx].at
              continue
          min = rem[i]
          idx = proc[i].pid
      end
      time++
      if idx != -1
          if --rem[idx] == 0
              update ct
          end
      end
  end
  ```

## External content

A [theoretical example](https://www.guru99.com/shortest-job-first-sjf-scheduling.html "SRTF Solved Example") of the **Shortest Remaining Time First Algorithm (Pre-emptive SJF)** is provided at the link.

To start with the **Nim** language, [go here](https://nim-lang.org/docs/tut1.html "Nim official tutorial").

For people with no experience in programming, follow this [tutorial](https://narimiran.github.io/nim-basics/ "Nim Basics Tutorial") to **Nim**.

***