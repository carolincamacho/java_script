'''
    if
    elif
    else
'''

x=2
#debe manejar identado
if x==2:
    print("cumple")

if x==3:
    print("priemra salida")
elif x==2: 
    print("segunda salida")
elif x==8:
    print("tercera salida")
else:
    print("no encontrado")

#OPERADORES LOGICOS
# OR  AND

if (100>10 and 10==100):
    print("doble condicion ok")

if (100>10 or 10==100):
    print("condicion OR ok")

