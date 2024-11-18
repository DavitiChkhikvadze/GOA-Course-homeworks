#no classwork.
#homework:
#N1

def manual_index(numbers_list, search_value):
    for i in range(len(numbers_list)):
        if numbers_list[i] == search_value:
            return i
        
print(manual_index([1,2,3,4,5], 2))

def manual_max(num_list):
    max_value = num_list[0]
    for number in num_list:
        if number > max_value:
            max_value = number
    return max_value

print(manual_max([1,2,3,4,5]))

def manual_min(num_list):
    for index in range(len(num_list)):
        min_value = num_list[0]
        if index > min_value:
            index = min_value
            return min_value
        
print(manual_min([1,2,3,4,5]))

def manual_pop(num_list, delete_index):
    new_list = []
    for i in num_list:
        if i != num_list[delete_index]:
            new_list.append(i)
    return new_list

print(manual_pop([1,2,3,4,5], 3))
            


         