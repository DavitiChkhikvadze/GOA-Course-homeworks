#for loop

for i in range(1, 51):
    if i % 5 == 0:
        print(i)

for i in range(2, 21):
    if i % 2 == 0:
        print(i)

num = 1
for i in range(5, 11):
    num = num * i
    print(num)

user_num = int(input('enter number here: '))
final_product = 1
for i in range(1, user_num + 1):
    final_product *= i
    print(user_num , 's factorial is' , final_product)


num2 = int(input("enter your number: "))

if num2 % 2 == 0: 
    print(num2 / 2)

else:
    print(num2 * 3 + 1)

#while loop
    
number = 10
while number > 0:
    print(number)
    number -= 1

name = input("enter your name: ")
while name != "quit":
    name = input("please, enter your name again: ")

number1 = 10
while  number1 < 21:
    print(number1)
    number1 += 2

number2 = int(input("enter your number: "))
while number2 < 0:
    number2 = int(input("enter your number: "))


number3 = 1
while number3 < 11:
    print(number3 * number3)
    number3 += 1



    






