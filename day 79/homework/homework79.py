import random

pupils = ["Giorgi Wankvetadze", "Dato Beruashvili", "Tornike Tabukashvili", "Mate Okinashvili", 
          "Nikolod Kukava", "Saba Shubashishvili", "Cotne Nebieridze", "Goirgi Papunashvili", "Sandro Suriakovi"
          , "Dimitri Ugrexelidze", "Tsotne Bajelidze", "Ioane Cercvadze", "Lasha Taziashvili", "Nika Suxishvili", "Gega Devdariani", "Ana Grigolia", "Nina Joxadze"]
leader1 = ["Daviti Chkhikvadze"]
leader2 = ["Deme Goisashvili"]
leader3 = ["Nika Chavleishvili"]

random.shuffle(pupils)

group1 = pupils[:5]
group2 = pupils[5:10]
group3 = pupils[10:16]

print("group 1: ", group1, "leader: ", leader1)
print("group 2: ", group2, "leader: ", leader2)
print("group 3: ", group3, "leader: ", leader3)
