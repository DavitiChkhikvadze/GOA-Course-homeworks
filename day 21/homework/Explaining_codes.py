word = input("enter your word: ")
reversed_word = ""

for index in range(len(word) - 1, -1, -1):
    reversed_word = reversed_word + word[index]

if word == reversed_word:
    print(word, "is palindrome")
else:
    print(word, "is not palindrome")


numbers_list = []
repeat_value = []

for i in range(5):
    num = int(input("Please enter number: "))
    numbers_list.append(num)


for number in numbers_list:
    count = numbers_list.count(number)
    if count > 1 and number not in repeat_value:
        repeat_value.append(number)

print(repeat_value)