def findCompletionTime():
    maxBT = max(proc, key = lambda x: x['bt'])['bt']
    time, fin = 0, 0
    rem = [p['bt'] for p in proc]
    while fin < len(proc):
        idx, minBT = -1, maxBT
        for r, p in zip(rem, proc):
            if r and r <= minBT and p['at'] <= time:
                if idx != -1 and p['bt'] == minBT and \
                        p['at'] >= proc[idx]['at']:
                            continue
                minBT = p['bt']
                idx = p['pid']
        time += 1
        if idx != -1:
            rem[idx] -= 1
            if rem[idx] == 0:
                fin += 1
                proc[idx]['ct'] = time

def findAvgTime():
    print('Avg TAT: ', end = '')
    print(f"{(sum((p['ct'] - p['at']) for p in proc) / len(proc)):.3f}")
    print('Avg WT: ', end = '')
    print(f"{(sum((p['ct'] - (p['at'] + p['bt'])) for p in proc) / len(proc)):.3f}")

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
    [print('\t'.join([f'{v}' for v in p.values()]),
        f"{p['ct'] - p['at']}",
        f"{p['ct'] - (p['at'] + p['bt'])}", sep = '\t') for p in proc]
    findAvgTime()
