#N1 codewars: string incrementer

def increment_string(strng):
    letters = strng.rstrip('0123456789') #rstrip() method removes the strings that are written in parentheses
    digits = strng[len(letters):] #slices letters and lives only digits that are in string
    
    if digits == "":
        return letters + '1'
    digits = str(int(digits) + 1).zfill(len(digits)) #zfill() method adds zeros to the start of the string until they are as long as written in the parentheses (zeros dont come out in terminal, it just raises length to specific number).
    return letters + digits

#N2 codewars: mean square error

def solution(array_a, array_b):
    
    sum_squared_diff = 0

    for a, b in zip(array_a, array_b): #zip() function returns a zip object, which is an iterator of tuples (or doubles) where the first item in each passed iterator is paired together, and then the second item in each passed iterator are paired together etc.
        abs_diff = abs(a - b) #abs() function returns the absolute value of the specified number.
        squared_diff = abs_diff ** 2
        sum_squared_diff += squared_diff
    
    average_squared_diff = sum_squared_diff / len(array_a)
    
    return average_squared_diff