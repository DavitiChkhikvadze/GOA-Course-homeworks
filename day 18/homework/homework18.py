names = ["Daviti", "Nika", "Luka", "Giorgi", "Gabriel"]
print(names[0])
print(names[1])
print(names[2])
print(names[3])
print(names[4])

names = ["Luka", "Saba", "Cotne", "Rezi", "Ioane"]
for i in names:
    print(i)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

plus = 0
multiplication = 1

for i in numbers:
    plus += i
    multiplication *= i

print(plus)
print(multiplication)

num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

sum = 0

for num in num_list:
    if num % 2 == 0:
        sum += num
        print(sum)

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

sum1 = 0
multi1 = 1

for num in nums:
    if num % 2 == 1:
        sum1 += num
        multi1 *= num
        print(sum1, multi1)

string = "Daviti"
for i in string:
    print(i)

string1 = "Gamarjoba"
eve_ind_str = ''

for i in range(0, len(string1)):
    if i % 2 == 0:
        eve_ind_str += string1[i]

print(eve_ind_str)

string2 = "Saqartvelo"
odd_ind_str1 = ''

for i in range(0, len(string2)):
    if i % 2 == 1:
        odd_ind_str1 += string2[i]

print(odd_ind_str1)

string3 = "GiOrAbIrSpBhEaStT"
even_ind_str = ''

for i in range(0, len(string3)):
    if i % 2 == 0:
        even_ind_str += string3[i]

print(even_ind_str)

x = 15
x += 34
print(x)

a = 95
a -= 16
print(a)

b = 21
b *= 3
print(b)

c = 174
c /= 3
print(c)

d = 47
d %= 9
print(d)






