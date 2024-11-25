# ამოცანა 1
array1 = [1, 2, 3, 4, 5]
for i in array1:
    if i % 2 == 0:
        print(i)

# ამოცანა 2
N2 = int(input())
array2 = [int(input()) for _ in range(N2)]
for i in range(1, len(array2), 2):
    print(array2[i], end=" ")

# ამოცანა 3
array3 = [int(input()) for _ in range(10)]
doubled_array3 = [x * 2 for x in array3]
print(doubled_array3)

# ამოცანა 4
N4 = int(input())
array4 = [int(input()) for _ in range(N4)]
print(reversed(array4))

# ამოცანა 5
N5 = int(input())
array5 = [int(input()) for _ in range(N5)]
array5[0], array5[-1] = array5[-1], array5[0]
print(array5)

