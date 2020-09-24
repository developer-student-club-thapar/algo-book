def findCompletionTime():
    for i in range(len(proc)):
        if proc[i]['at'] > proc[i - 1]['ct']:
            proc[i]['ct'] = proc[i]['at'] + proc[i]['bt']
        else:
            proc[i]['ct'] = proc[i - 1]['ct'] + proc[i]['bt']

def findAvgTime():
    print('Avg TAT: ', end = '')
    print('%.3f'%(sum((x['ct'] - x['at']) for x in proc) / len(proc)))
    print('Avg WT: ', end = '')
    print('%.3f'%(sum((x['ct'] - (x['at'] + x['bt'])) for x in proc) / len(proc)))

if __name__ == '__main__':
    proc = [
            {'pid': 0, 'at': 2, 'bt': 5, 'ct': 0},
            {'pid': 1, 'at': 0, 'bt': 3, 'ct': 0},
            {'pid': 2, 'at': 1, 'bt': 6, 'ct': 0},
            {'pid': 3, 'at': 2, 'bt': 2, 'ct': 0},
            {'pid': 4, 'at': 7, 'bt': 1, 'ct': 0},
            {'pid': 5, 'at': 5, 'bt': 2, 'ct': 0}
            ]
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
