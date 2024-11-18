#no classwork
#homework:
#N1
def reversed_cap_string(string):
    new_string = string.upper()
    newest_string = new_string[::-1]
    return newest_string

print(reversed_cap_string("VaNo MoTiashvili"))

#N2
# def list_filter(list):
#     even = []
#     odd = []
#     index = 0
#     for i in list:
#         if list[index] % 2 == 0:
#             index += 1
#             even.append(i.upper())
#             return even
#         else:
#            index += 1
#            odd.append(i.upper())
#            return odd 
#ეს ვერ გავიგე რატომ არ მუშაობს

# print(list_filter(["vano" , "nika" , "bubazi" , "zauri"]))
        
#N3
def list_filter_N2(list1):
    new_list = []
    for i in list1:
        if len(i) % 2 == 0:
            new_list.append(i.upper())
        else:
            new_list.append(i.lower())
            new_list.append(i.capitalize())
    return new_list

print(list_filter_N2(["goa_best" , "vano" , "nesvi" , "tskhVarAdzE"]))

#N4
def list_sort(list):
    new_list = []
    for i in list:
        if i.isupper():
            new_list.append(i.lower())
        else:
            new_list.append(i.upper())
    return new_list

print(list_sort(["vano" , "DAVIT" , "LUKA" , "nika"]))

#N5
def string_find(string):
    for i in string:
        if string.find(i) % 2 == 0:
            return string.upper()
        else:
            return string.capitalize()
    
print(string_find("vano motiashvili"))
