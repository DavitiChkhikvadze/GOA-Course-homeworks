user_number = int(input("enter your number here: "))

if user_number > 0:
    print("your chosen number is positive")
elif user_number < 0:
    print("your number is negative")
else:
    print("your number is zero")

#davaleba 2
    
user_age = int(input("enter your age: "))

if user_age >= 0 and user_age < 18:
    print("you are still child")
elif user_age >= 18 and user_age < 50:
    print("you are adult")
else:
    print("you are old")

