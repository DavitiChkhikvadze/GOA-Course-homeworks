def sum_two_smallest_numbers(numbers):
    sorted_numbers = sorted(numbers)
    return sorted_numbers[0] + sorted_numbers[1]

print(sum_two_smallest_numbers([1,2,3,4,5]))

def max_multiple(divisor, bound):
    if divisor <=0 or bound <=0:
        return "error"
    N = (bound // divisor) * divisor
    return N

print((max_multiple(2,7)))

def get_even_numbers(arr):
    new_list = []
    for i in arr:
        if i % 2 == 0:
            new_list.append(i)
    return new_list

print(get_even_numbers([1,2,3,4,5,6,7,8]))

def check_exam(arr1,arr2):
    count = 0
    for i in range(len(arr1)):
        if arr1[i] == arr2[i]:
            count += 4
        elif arr1[i] != arr2[i]:
            count -= 1
        else:
            count += 0
        return count
    
    
print(check_exam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
