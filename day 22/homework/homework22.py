word = input("enter your word: ")
for i in range(0, len(word) + 1 ):
    if i > 3:
        print(word[:3])
    elif i <= 3:
        print(word[:1])

list = []
for i in range(10, 21):
    list.append(i)
print(list)

new_list = []
new_list.append(list[0:20:2])
print(new_list)

user_word = input("enter your word here: ")
print(user_word[::-1])

