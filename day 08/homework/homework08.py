# დღეს ჩვენ შედარების ოპერატორებს გავაერთიანებთ and და or ოპერატორებთან და მოვიყვანთ ასეთ 10 მაგალითს

Power_on = True
Air_conditioner_on = False
print(Power_on and Air_conditioner_on )
print(Power_on or Air_conditioner_on)

score = 300
required_score = 250
print(score > required_score)

if score > required_score:
    print("You have beaten the level!")
else: 
    print("You failed the level.")


balance = 500
mobile = 800
affoard = 500 > 800
income = 400
balance2 = balance + income
affoard2 = balance2 > mobile

if balance2 > mobile:
    print("enjoy your purchase!")
else:
    print("sorry, but you don't have enough balance")

Input_number = int(input("please enter number between 1-10: "))
Winning_number = 7
if Input_number == Winning_number:
    print("you have won!")
else:
    print("sorry, but you have chosen the wrong one. You lost!")


gadget_price = 200
current_balance = 207
affoardable = current_balance > gadget_price

print(affoardable)
print(type(affoardable))



