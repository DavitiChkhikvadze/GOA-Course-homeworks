#120 homeworks
#1
print("Hello World!")
#2
user_word = input("enter smth: ")
print(user_word)
#3
#ეს არის ერთხაზიანი კომენტარი, რომელსაც სადამდეც მინდა იქამდე გავაგრძელებ.
#ეს არის ორხაზიანი კომენტარი, რომელიც გადადის შემდეგ ხაზზე, 
# რადგან, თუ ძაან გრძელია, მომხმარებელს სქროლვა არ დასჭირდეს.
#4
for i in range(0, 10):
    print(i) #ინდენტაცია არის დაშორება (ტაბით), ის მნიშვნელოვანია, რადგან, 
    #თუ არ გამოვიყენებთ მას, ეს სინტაქსური შეცდომაა და ერორს დაწერს.
#5
for i in range(9):
  if i > 3:
    break
  print(i)

#6
x = 12
y = "Hello"
z = 0.5
a = True
print(x, y, z, a)
#7
x = y
y = 12
print (x, y) 
#8
user_choice = input("something: ")
print(user_choice)
#9
variable = "variable"
def output_variable():
   variable2 = "in python"
   print("this is", variable, variable2)

output_variable()
#10
#ცვლადების სახელები არ უნდა იწყებოდეს რიცხვებით და სფეისების მაგივრად უნდა იყოს
#გამოყენებული ქვედა ტირე, ან ერთად უნდა დაიწეროს. 
#11
var1 = str(47)
var2 = int("34")
var3 = float(95)
print(var1, var2, var3)
#12
print(type(var1))
print(type(var2))
print(type(var3))
#13
print(int(var1) + var3)
print(14 / 2)
print(var2 * var1)
print(var3 - int(var1))
#14
import math
print(math.ceil(1.6))
print(math.ceil(98.2))
print(math.ceil(124124.235232))
#15
print(math.gcd(4, 9))
print(math.gcd(8, 16))
print(math.gcd(13, 39))
#16
int_to_float = float(50)
float_to_int = int(5.8)
print(int_to_float, float_to_int)
#17
num = int("6801")
num1 = float("1234")
#18
print(int("69"))
print(int('37'))
print(int('23'))
#19
print(3 > 5)
print(4 > 1)
print(3 + 1 > 4)
#20
print(True and False)
print(True or False)





