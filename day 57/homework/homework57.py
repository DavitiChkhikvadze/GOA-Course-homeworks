#1
def pig_it(text):
    result = []
    
    for i in text.split():
        if i.isalpha():
            result.append(i[1:] + i[0] + 'ay')
        else:
            result.append(i)

    return ' '.join(result)

#2
def duplicate_encode(word):
    word = word.upper()
    result = ""
    for char in word:
        if word.count(char) > 1:
            result += ')'
        else:
            result += '('
    
    return result

#3
#მართლა ბევრი ვეწვალე მაგრამ ვერც აქ და ვერც codewars-ში ამოვხსენი