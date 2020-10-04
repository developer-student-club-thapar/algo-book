def findCompletionTime():
    fin = [False] * len(proc)
    time, idx = 0, 0
    end, lastArrival = 0, max(proc, key = lambda x: x['at'])['at'] + 1
    while end < len(proc):
        curr = lastArrival
        for elem in zip(fin, proc):
            if not elem[0] and curr > elem[1]['at']:
                idx = elem[1]['pid']
                curr = elem[1]['at']
        if time < curr:
            time = curr
        fin[idx] = True
        time += proc[idx]['bt']
        proc[idx]['ct'] = time
        end += 1

def findAvgTime():
    print('Avg TAT: ', end = '')
    print('%.3f'%(sum((p['ct'] - p['at']) for p in proc) / len(proc)))
    print('Avg WT: ', end = '')
    print('%.3f'%(sum((p['ct'] - (p['at'] + p['bt'])) for p in proc) / len(proc)))

if __name__ == '__main__':
    proc = [
            {'pid': 0, 'at': 2, 'bt': 5, 'ct': 0},
            {'pid': 1, 'at': 0, 'bt': 3, 'ct': 0},
            {'pid': 2, 'at': 1, 'bt': 6, 'ct': 0},
            {'pid': 3, 'at': 2, 'bt': 2, 'ct': 0},
            {'pid': 4, 'at': 7, 'bt': 1, 'ct': 0},
            {'pid': 5, 'at': 5, 'bt': 2, 'ct': 0}
            ]
    findCompletionTime()

    print('PID\tAT\tBT\tCT\tTAT\tWT')
    [print(f"{p['pid']}",
        f"{p['at']}",
        f"{p['bt']}",
        f"{p['ct']}",
        f"{p['ct'] - p['at']}",
        f"{p['ct'] - (p['at'] + p['bt'])}",
        sep = '\t') for p in proc]
    findAvgTime()
