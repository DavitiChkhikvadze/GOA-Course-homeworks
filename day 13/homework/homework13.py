for i in range(1, 50):
    if i // 3 % 0:
        print("fizz")
    elif i // 5 % 0:
        print("buzz")
    elif i // 5 % 0 and i // 3 % 0:
        print("fizzbuzz")
    else:
        print(i)


user_number = int(input("enter your number here: "))

if user_number > 0:
    print("your chosen number is positive")
elif user_number < 0:
    print("your number is negative")
else:
    print("your number is zero")


for i in range(1, 100):
    if i / 2 % 0:
        print(i)

num = 101
i = 0
while num > 0:
    print(num)
    num += 1
    print(num + i + 1)

user_weekday = input("enter your day of the week: ")

if user_weekday == "Monday":
    print("day 1")
elif user_weekday == "Tuesday":
    print("day 2")
elif user_weekday == "Wednesday":
    print("day 3")
elif user_weekday == "Thursday":
    print("day 4")
elif user_weekday == "Friday":
    print("day 5")
elif user_weekday == "Saturday":
    print("day 6")
elif user_weekday == "sunday":
    print("day 7")


user_num = int(input("enter your number here: "))
if user_num / 2 % 0:
    print("your number is even")
elif user_num / 2 % 1:
    print("your number is odd")
else:
    print("your number is zero")

