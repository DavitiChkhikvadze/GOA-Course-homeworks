def smaller(arr): #შევქმენით ფუნქცია სახელად smallest და მივანიჭეთ ატრიბუტი arr
    result = [] #შევქმენით ცვლადი სახელად result და მივანიჭეთ მნიშვნელობა: ცარიელი სია
    count = 0 #შევქმენით ცვლადი სახელად count და მივანიჭეთ მნიშვნელობა 0
    for i in range(len(arr)): #გამოვიყენეთ for ციკლი რომ იმდენჯერ გამეორებულიყო კონკრეტული მოქმედება, რამდენი character-ისგანაც შედგებოდა სია, რომ საზღვრებს არ გამცდარიყო 
        #len ფუნქცია იგებს თუ რამდენი character-ისგან შედგება სია.
        for j in range(i + 1, len(arr)): #for ციკლში კიდე ჩავსვით for ციკლი, და i + 1 -ია საწყისი, რადგან i ვერ იმუშავებს. და დასასრული ცხრილის სიგრძეა.
            if arr[i] > arr[j]: #თუ ცხრილში მომდევნო ინდექსზე მყოფი character-ი უფრო დიდია წინაზე, მაშინ count ცვლადს დაემატება 1.
                count += 1
        result.append(count) #შემდეგ დავუბრუნდით პირველ for ციკლს. მიღებული შედეგი count-ში დაემატება result ცვლადში და შემდეგ count-ი გახდება 0
        count = 0
    return result #ბოლოს დავაბრუნებთ მიჭებულ სიას.


#კომენტარებით ახსენით ეს კოდი