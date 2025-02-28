def speedify(st): 
    arr = []
    L = len(st)
    for i in range(L):
        n = i + ord(st[i]) - ord('A')
        if n >= len(arr):
            arr += [' ']*(n -len(arr)) + [st[i]]

        else:
            arr[n] = st[i]
    return ''.join(arr)