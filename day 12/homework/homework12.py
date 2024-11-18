#მომხმარებელს ჯერ შემოატანინეთ ბიუჯეტი, შემდეგ კი ის თანხა, 
#რომელიც სასურველი ნივთის საყიდლად სჭირდება. დაბეჭდეთ შეუძლია ყიდვა თუ არა.

user_budget = int(input("please enter your budget: "))
iphone14 = 2000

if user_budget >= iphone14:
    print("purchase completed")
else: 
    print("not enough money. purchase faied")


#შექმენით ცვლადი, სადაც შეინახავთ თქვენთვის სასურველ პაროლს. 
#მომხმარებელს შეეკითხეთ პაროლი და სანამ სწორს არ შემოიტანს თავიდან შეეკითხეთ, 
#თან დაუმატეთ თუ მერამდენე ცდაზეა (გამოიყენეთ while ციკლი).
#თუ მან მეხუთე ცდაზეც ვერ შეიყვანა სწორად, დაუპრინტეთ, რომ სისტემა დაბლოკილია.
    
password = "GOAisbest123"
user_password = input("enter your password: ")
i = 1
while password != user_password:
    print("enter your password again. I said it", i , "times already")
    user_password = input("enter your password: ")
    i += 1
    if i == 5:
        print("you are blocked, please try again in 10 minutes")

#მომხმარებელს შეეკითხეთ for ციკლისთვის მინიმალური, მაქსიმალური მნიშვნელობები და
# step-ის რიცხვი. ამ მნიშვნელობებით მოახდინეთ ციკლის მუშაობა და დაპრინტეთ თითოეული რიცხვი.

user_number1 = int(input("enter your minimal number for 'for' loop: "))
user_number2 = int(input("eneter your maximal number for 'for' loop: "))
user_step = int(input("enter your step from min to max numbers for 'for' loop: "))

for i in range(user_number1, user_number2, user_step):
    print(i)

#მომხმარებელს შემოატანინეთ სამკუთხედის სამი გვერდი და შეამოწმეთ თუ არსებობს ის. 
#არსებობის შემთხვევაში დაპრინტეთ, რომ მონაცემები სწორია, 
#სხვა შემთხვევაში შემოატანინეთ გვერდების მნიშვნელობები თავიდან ( გამოიყენეთ while ციკლი ).

user_input_for_triangle_side1 = int(input("enter your length here: "))
user_input_for_triangle_side2 = int(input("enter your length here: "))
user_input_for_triangle_side3 = int(input("enter your length here: "))

while (user_input_for_triangle_side1 + user_input_for_triangle_side2 > user_input_for_triangle_side3 and user_input_for_triangle_side1 + user_input_for_triangle_side3 > user_input_for_triangle_side2 and user_input_for_triangle_side2 + user_input_for_triangle_side3 > user_input_for_triangle_side1) == False:
    user_input_for_triangle_side1 = int(input("enter your length here: "))
    user_input_for_triangle_side2 = int(input("enter your length here: "))
    user_input_for_triangle_side3 = int(input("enter your length here: "))

if user_input_for_triangle_side1 + user_input_for_triangle_side2 > user_input_for_triangle_side3 and user_input_for_triangle_side1 + user_input_for_triangle_side3 > user_input_for_triangle_side2 and user_input_for_triangle_side2 + user_input_for_triangle_side3 > user_input_for_triangle_side1:
    print("triangle exists")


#მომხმარებელს შეეკითხეთ for ციკლისთვის მინიმალური და მაქსიმალური მნიშვნელობები.
#დაპრინტეთ ამ დიაპაზონში არსებული ყველა მარტივი რიცხვი.
    
user_input_for_for_loop1 = int(input("enter your min number here: "))
user_input_for_for_loop2 = int(input("enter your max number here: "))
user_input_for_for_loop_steps = int(input("enter your step here: "))

for i in range(user_input_for_for_loop1, user_input_for_for_loop2, user_input_for_for_loop_steps):
    if i / 2 % 1:
        print(i)
#es kargad ver gavige tu rogor gamomesaxa martii ricxvebi
        

#შექმენით კალკულატორი, სადაც მომხმარებელი აირჩევს შემდეგ ოპერაციებს: + - * / 
#და მის მიერ შემოტანილი ორი რიცხვით მიიღებს პასუხს.

operation = input("Please enter operation (+,-,*,/): ")
num1 = int(input("Please enter first number: "))
num2 = int(input("Please enter second number: "))

if operation == '+':
    print(num1 + num2)
elif operation == '-':
    print(num1 - num2)
elif operation == '*':
    print(num1 * num2)
elif operation == '/':
    print(num1 / num2)
else:
    print("operation is not valid")


#მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ თუ არის როგორც ორის, ასევე სამის ჯერადი.
# არსებობის შემთხვევაში დაპრინტეთ ეს რიცხვი, ხოლო თუ არ იქნება
#მაშინ თავიდან შეეკითხეთ (გამოიყენეთ while ციკლი).

user_input_number = int(input("enter your number here: "))

if user_input_number / 2 % 0 and user_input_number / 3 % 0:
    print(user_input_number)
else: 
    print("enter your number again: ")
    user_input_number = int(input("enter your number here: "))

#მომხმარებელს შემოატანინეთ ასაკი და დაუპრინტეთ შეუძლია თუ არა არჩევნებში მონაწილეობის მიღება. 

user_age = int(input("enter your age here: "))

if user_age >= 20:
    print("you can participate in political elections")
else:
    print("you can't participate in politican elections")



