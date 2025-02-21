#N1
def number(lines):
    numbered_lines = []
    for i in range(len(lines)):
        numbered_lines.append(f"{i + 1}: {lines[i]}")
    return numbered_lines

#N2
def bonus_time(salary, bonus):
    if bonus == True:
        return '$' + str(salary*10)
    elif bonus == False:
        return '$' + str(salary)
    
#N3
def min_max(lst):
    result = []
    result.append(min(lst))
    result.append(max(lst))
    return result

#N4
def sum_mix(arr):
    sum = 0
    for i in arr:
        sum += int(i)
    return sum