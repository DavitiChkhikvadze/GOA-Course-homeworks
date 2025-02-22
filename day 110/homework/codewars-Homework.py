#N1
def task1():
    matrix = []
    for i in range(7):
        row = list(map(int, input(f"შეიყვანე {i+1}-ე სტრიქონი (6 რიცხვი): ").split()))
        matrix.append(row)
    
    print("სტრიქონების საშუალო არითმეტიკულები:")
    for row in matrix:
        print(sum(row) / len(row))
    
    print("სვეტების საშუალო არითმეტიკულები:")
    for j in range(6):
        col_sum = sum(matrix[i][j] for i in range(7))
        print(col_sum / 7)

#N2
def task2():
    matrix = []
    for i in range(7):
        row = list(map(int, input(f"შეიყვანე {i+1}-ე სტრიქონი (6 რიცხვი): ").split()))
        matrix.append(row)
    
    for j in range(6):
        for i in range(7):
            if j % 2 == 0:
                matrix[i][j] //= 2
            else:
                matrix[i][j] %= 13
    
    print("შედეგი:")
    for row in matrix:
        print(*row)

#N3
def task3():
    matrix = []
    for i in range(5):
        row = list(input(f"შეიყვანეთ {i+1}-ე სტრიქონი (6 სიმბოლო): "))
        matrix.append(row)
    
    for row in matrix:
        row[0], row[-1] = row[-1], row[0]
    
    print("შედეგი:")
    for row in matrix:
        print("".join(row))

#N4
def task4():
    matrix = []
    for i in range(6):
        row = list(map(int, input(f"შეიყვანეთ {i+1}-ე სტრიქონი (5 0 ან 1): ").split()))
        matrix.append(row)
    
    matrix[1], matrix[4] = matrix[4], matrix[1]
    
    print("შედეგი:")
    for row in matrix:
        print(*row)

#N5
def task5():
    n, m = map(int, input("შეიყვანეთ n და m: ").split())
    matrix = []
    for i in range(n):
        row = list(map(int, input(f"შეიყვანეთ {i+1}-ე სტრიქონი ({m} რიცხვი): ").split()))
        matrix.append(row)
    
    max_value = float('-inf')
    max_coords = (0, 0)
    for i in range(n):
        for j in range(m):
            if matrix[i][j] > max_value:
                max_value = matrix[i][j]
                max_coords = (i, j)
    
    print("მაქსიმალური ელემენტი მდებარეობს:", max_coords[0], max_coords[1])
