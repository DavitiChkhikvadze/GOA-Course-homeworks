from turtle import *


#we want to paint a house

#step 1: draw a square
speed(5)
width(7)
color("green")
begin_fill()
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
end_fill()

#end of square

#drawing the door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(90)           #height of the door
right(90)
forward(60)
right(90)
forward(90)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(10, 180)
pendown()

color("blue")
begin_fill()
left(120)
forward(80)
right(90)
forward(60)
right(90)
forward(80)
right(90)
forward(60)
end_fill()

penup()
goto(190, 180)
pendown()

color("blue")
begin_fill()
left(90)
forward(80)
left(90)
forward(60)
left(90)
forward(80)
left(90)
forward(60)
end_fill()

exitonclick()
