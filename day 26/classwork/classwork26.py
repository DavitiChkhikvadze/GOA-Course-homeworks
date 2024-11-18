def print_range(start, end):
    for i in range(start, end):
        print(i)

print_range(2, 5)

def sum_range(start, end):
    sum = 0
    for i in range(start, end):
        sum += i
    print(sum)

sum_range(3, 7)

def list_Arithmetic_average(start, end):
    num_list = []
    sum = 0
    for i in range(start, end):
        num_list.append(i)
        sum += i
    print(sum // len(num_list))

list_Arithmetic_average(3, 9)

def name_index(name, index):
    print(name[index])

name_index("Daviti", 2)

def age_teller():
    for i in range(101):
        if i == 18:
            print("you are adult")
        elif i == 60:
            print("you are pensioner")
        elif i == 100:
            print("you are old aged")

age_teller()

def sum_of_numbers(x, y):
    return x + y

print(sum_of_numbers(3,5))

def odd_ind_str(string):
    new_string = ""
    for i in range(len(string)):
        if i % 2 == 0:
            new_string.append(i)
    return new_string

print(odd_ind_str("hello"))


    
    
