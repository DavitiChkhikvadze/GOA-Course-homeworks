# პირველი დავალება: ციფრთა ჯამი
def sum_digits(n):
    result = 0
    while n > 0:
        result += n % 10
        n // 10
    return result
# შეცდომა კოდში:
# კოდის ამ სტრიქონში - n // 10 - არ ხდება n-ის განახლება, რადგან გაყოფის შედეგი არ ინახება ცვლადში.

#შესწორებული კოდი:
def sum_digits(n):
    result = 0
    n = abs(n)

    while n > 0:
        result += n % 10
        n //= 10

    return result

print(sum_digits(123))  
print(sum_digits(405))  
print(sum_digits(-567))  
#✅ შეცდომა გაშვების გარეშე ჩანს?
#დიახ, n // 10 მხოლოდ შესრულდება, მაგრამ n-ს არ შეუცვლის მნიშვნელობას.

#✅ როგორ ვიმუშაოთ უარყოფით რიცხვებთან?
#ფუნქციის დასაწყისში abs(n) გამოყენებით, რადგან უარყოფითი რიცხვების ციფრთა ჯამი იგივეა, რაც მისი დადებითი ანალოგის.

# მეორე დავალება: ორი უდიდესი განსხვავებული რიცხვის ჯამი
def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    max2 = max(lst)

    return max1 + max2

print(sum_two_largest([3, 7, 2, 9, 5]))  # მოსალოდნელი შედეგი: 16 (9 + 7)
print(sum_two_largest([10, 10, 5, 3]))   # მოსალოდნელი შედეგი: 20 (10 + 10)
# შეცდომა კოდში:

# max1 = max(lst)
# max2 = max(lst)
# ორივე max(lst) აბრუნებს სიაში უდიდეს რიცხვს, ამიტომ max2 არასდროს იქნება განსხვავებული რიცხვი.

# შესწორებული კოდი:
def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    lst.remove(max1)
    max2 = max(lst)

    return max1 + max2

print(sum_two_largest([3, 7, 2, 9, 5]))  
print(sum_two_largest([10, 10, 5, 3]))   
print(sum_two_largest([1, 1, 1]))       
# ✅ შეცდომა გაშვების გარეშე ჩანს?
# დიახ, max2 = max(lst) კვლავ აბრუნებს max1-ს, ამიტომ ყოველთვის ერთსა და იმავე რიცხვს ორჯერ ამატებს.

# ✅ როგორ გამოვასწორეთ?
# პირველი უდიდესი რიცხვი წავშალეთ სიიდან, რათა max(lst) მეორედ გამოყენებისას მეორე უდიდესს იპოვოს.