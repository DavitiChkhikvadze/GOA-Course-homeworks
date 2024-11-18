def even_ind_sum():
    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    sum = 0
    for i in range(len(nums)):
        if nums[i] % 2 == 0:
            sum += i
    return sum

print(even_ind_sum())

def even_or_odd(x):
    if x % 2 == 0:
        return "even"
    else:
        return "odd"
    
print(even_or_odd(2))
print(even_or_odd(3))

def prime_or_not(x):
    if x / x == 1 and x % 2 != 0:
        return "prime"
    else:
        return "not prime"
    
print(prime_or_not(10))
print(prime_or_not(7))

def capitalized_list():
    names = ["david", "chad", "gigachad"]
    names[0] = "David"
    names[1] = "Chad"
    names[2] = "Gigachad"
    return names

print(capitalized_list())

def num_list_changer():
    num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    new_list = []
    for i in num_list:
        if i % 2 == 0:
            new_list.append(i // 2)
        else:
            new_list.append(i * 2)
    return new_list

print(num_list_changer())



