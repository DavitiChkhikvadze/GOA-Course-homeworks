user_str = input("enter your string here: ")
user_index = int(input("enter your index here:"))
print(user_str[user_index])

names = ["Daviti", "Giorgi", "Nika", "Luka", "Gabrieli"]
user_ind = int(input("enter your index here: "))
print(names[user_index])

user_name = input("enter your name: ")
user_surname = input("enter your surname: ")
user_age = int(input("enter your age: "))
user_email = input("enter your email: ")
user_location = input("enter your location: ")
user_list = [user_name, user_surname, user_age, user_email, user_location]
user_index1 = int(input("enter your index for list: "))
print(user_list[user_index1])

string = input("enter string: ")
even_ind_str = ''
for i in range(0, len(string)):
    if i % 2 == 0:
        even_ind_str += string[i]
print(even_ind_str)

user_string = input("enter your string: ")
odd_ind_str = ''
for i in range(0, len(user_string)):
    if i % 2 == 0:
        odd_ind_str += user_string[i]
print(odd_ind_str)

animals = ["dog", "cat", "parrot", "bear", "deer"]
print(animals[1:3])
