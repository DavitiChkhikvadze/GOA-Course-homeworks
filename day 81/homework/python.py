def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

def count_odds(num):
    count = 0
    str_num = str(num)
    for i in str_num:
        if int(i) % 2 != 0:
            count += 1

    return count

print(count_odds(12544))


n = int(input("enter count of nums: "))

# რიცხვების სიის შეყვანა
numbers = []
for _ in range(n):
    number = int(input("enter full number: "))
    numbers.append(number)

filtered_numbers = [
    num for num in numbers 
    if (num < 100 and ((num % 3 == 0 and num % 6 != 0) or (num % 5 == 0 and num % 10 != 0)))
]


n = int(input("enter number of symbols: "))

symbols = []
for i in range(n):
    symbol = input(f"enter symbol #{i + 1}: ")
    symbols.append(symbol)

counts = []
for i in range(n):
    counts.append(symbols[:i].count(symbols[i]))