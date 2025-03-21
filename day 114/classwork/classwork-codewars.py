#N1
def elevator_distance(array):
    total = 0
    for i in range(1, len(array)):
        total += abs(array[i] - array[i - 1])
    return total

#N2
def elimination(arr):
    seen = set()
    for num in arr:
        if num in seen:
            return num
        seen.add(num)
    return None