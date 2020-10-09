def findCompletionTime():
    proc[0]['ct'] = proc[0]['at'] + proc[0]['bt']
    time, maxBT = proc[0]['ct'], max(proc, key = lambda x: x['bt'])['bt']
    end = 1
    while end < len(proc):
        idx, minBT = -1, maxBT
        for i in range(1, len(proc)):
            if not proc[i]['ct'] and proc[i]['bt'] <= minBT and proc[i]['at'] <= time:
                if idx != -1 and proc[i]['bt'] == minBT and \
                        proc[i]['at'] >= proc[idx]['at']:
                            continue
                minBT = proc[i]['bt']
                idx = i
        if idx == -1:
            p = min([p for p in proc if p['at'] > time],
                    key = lambda x: x['at'])
            time, idx = p['at'], [i for i in range(1, len(proc)) if proc[i] is p][0]
        time += proc[idx]['bt']
        proc[idx]['ct'] = time
        end += 1

def findAvgTime():
    print('Avg TAT: ', end = '')
    print('%.3f'%(sum((x['ct'] - x['at']) for x in proc) / len(proc)))
    print('Avg WT: ', end = '')
    print('%.3f'%(sum((x['ct'] - (x['at'] + x['bt'])) for x in proc) / len(proc)))

if __name__ == '__main__':
    proc = [
            {'pid': 0, 'at': 13, 'bt': 2, 'ct': 0},
            {'pid': 1, 'at': 5, 'bt': 1, 'ct': 0},
            {'pid': 2, 'at': 2, 'bt': 3, 'ct': 0},
            {'pid': 3, 'at': 1, 'bt': 1, 'ct': 0},
            {'pid': 4, 'at': 0, 'bt': 4, 'ct': 0}
            ]

    proc.sort(key = lambda x: x['bt'])
    proc.sort(key = lambda x: x['at'])
    findCompletionTime()
    proc.sort(key = lambda x: x['pid'])

    print('PID\tAT\tBT\tCT\tTAT\tWT')
    [print(f"{p['pid']}",
        f"{p['at']}",
        f"{p['bt']}",
        f"{p['ct']}",
        f"{p['ct'] - p['at']}",
        f"{p['ct'] - (p['at'] + p['bt'])}",
        sep = '\t') for p in proc]
    findAvgTime()
