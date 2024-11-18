def abbrev_name(name):
    first_name, last_name = name.split()
    initial1 = first_name[0].upper()
    initial2 = last_name[0].upper()
    return f"{initial1}.{initial2}"

print(abbrev_name("david chkhikvadze"))

def sum_mix(arr):
    sum = 0
    for i in arr:
        sum += int(i)
    return sum

print(sum_mix([1, 2, "3", 4, "5"]))

def find_smallest_int(arr):
    smallest = arr[0]
    for i in arr:
        if i < smallest:
            smallest = i
    return smallest

print(find_smallest_int([1,2,3,4,5,-6,7]))

def count_sheep(n):
    if n <= 0:
        return ''
    for i in range(1, n+1):
        print(i, "sheep...")
        
count_sheep(3)

def array_plus_array(arr1,arr2):
    sum = 0
    for i in arr1:
        sum += i
    for num in arr2:
        sum += num
    return sum

print(array_plus_array([1,2,3,4,5], [6, 7, 8]))

def all_nines(x):
    if x <= 0 or x > 4000:
        return -1
    num = 9
    count = 1

    while num <= 10**12:
        if num % x == 0:
            return num // x
        num = num * 10 + 9
        count += 1
    return -1

print(all_nines(13))
        





