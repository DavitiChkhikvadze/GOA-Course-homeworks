list1 = ["a", "a", "b", "b"] 
list2 = ["a", "c", "b", "d"]
counter = 0
for i in range(len(list1)):
    if list1[i] == list2[i]:
        counter += 4
    elif list1[i] == "" or list2[i] == "":
        counter += 0
    else:
        counter -= 1
print(counter)


