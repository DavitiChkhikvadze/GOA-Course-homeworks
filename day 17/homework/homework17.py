name_list = ["daviti", "giorgi", "luka", "nika", "sandro"]
print(name_list[0])
print(name_list[1])
print(name_list[2])
print(name_list[3])
print(name_list[4])

list_copy = ["daviti", "giorgi", "luka", "nika", "sandro"]
for i in list_copy:
    print(i)

num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in num_list:
    print(i + i)
    print(i * i)
    if i / 2 % 0:
        print(i)
        print(i + i)
    else:
        print(i * i)

string = "innumerable"
for i in string:
    print(i)
    
string1 = "hello"
for i in string:
    print(i[0] + i[2] + i[4])





