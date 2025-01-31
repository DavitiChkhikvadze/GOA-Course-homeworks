#codewars1
import math

def find_next_square(sq):
    if math.isqrt(sq) ** 2 == sq:
        next_sq = (math.isqrt(sq) + 1) ** 2
        return next_sq
    return -1

#codewars2
def solution(text, ending):
    return text[-len(ending):] == ending if len(ending) <= len(text) else False