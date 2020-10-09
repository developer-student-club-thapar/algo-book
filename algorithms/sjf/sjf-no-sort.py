def findCompletionTime():
    maxBT = max(proc, key = lambda x: x['bt'])['bt']
    time = 0
    prc = proc
    while len(prc):
        idx = -1
        minBT = maxBT
        for p in prc:
            if p['bt'] <= minBT and p['at'] <= time:
                if idx != -1 and p['bt'] == minBT and \
                        p['at'] >= proc[idx]['at']:
                            continue
                minBT = p['bt']
                idx = p['pid']
        if idx == -1:
            time, idx = tuple(
                    map(
                        min([p for p in prc if p['at'] > time],
                            key = lambda x: x['at']).get,
                        ['at', 'pid'])
                    )
        time += proc[idx]['bt']
        proc[idx]['ct'] = time
        prc = [p for p in prc if p['pid'] != idx]

def findAvgTime():
    print('Avg TAT: ', end = '')
    print('%.3f'%(sum((p['ct'] - p['at']) for p in proc) / len(proc)))
    print('Avg WT: ', end = '')
    print('%.3f'%(sum((p['ct'] - (p['at'] + p['bt'])) for p in proc) / len(proc)))

if __name__ == '__main__':
    proc = [
            {'pid': 0, 'at': 13, 'bt': 2, 'ct': 0},
            {'pid': 1, 'at': 5, 'bt': 1, 'ct': 0},
            {'pid': 2, 'at': 2, 'bt': 3, 'ct': 0},
            {'pid': 3, 'at': 1, 'bt': 1, 'ct': 0},
            {'pid': 4, 'at': 0, 'bt': 4, 'ct': 0}
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
