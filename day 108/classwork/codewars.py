def get_size(w,h,d):
    area = 2*((d*w)+(h*d)+(h*w))
    volume = w*h*d
    return [area, volume]

print(get_size(20,15,5))