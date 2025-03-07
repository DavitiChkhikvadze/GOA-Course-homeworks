def manual_rstrip(string):
    index = len(string)
    for i in range(len(string) - 1, -1, -1):
        if string[i] != ' ':
            index = i + 1
    
    return string[:index]


def manual_lstrip(string):
    index = 0
    for i in range(len(string)):
        if string[i] != ' ':
            index = i
    
    return string[index:]

def manual_strip(string):
    return manual_lstrip(manual_rstrip(string))

