def solution(string):
    return(string[::-1])

print(solution('world'))
print(solution('hello'))
print(solution('level'))
print(solution('ho'))

def even_or_odd(num):
    if num % 2 == 0:
        return("number is even")
    else:
        return("number is odd")
    
print(even_or_odd(3))
print(even_or_odd(4))

def math_checker(a, b):
    if a > b:
        return("True")
    else:
        return("False")

print(math_checker(3, 6))
print(math_checker(5, 2))

def greeting(name):
    return('hello ', name)

print(greeting("Daviti"))
print(greeting("GOA"))



