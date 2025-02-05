#N1
def count_of_forst_letter(s):
    if not s:
        return 0
    first_char = s[0]
    count = 0
    for char in s:
        if char == first_char:
            count += 1
    return count

print(count_of_forst_letter("photograph"))

#N2
def points(games):
    total_points = 0
    
    for game in games:
        x, y = map(int, game.split(':'))
        
        if x > y:
            total_points += 3 
        elif x == y:
            total_points += 1
        
    return total_points