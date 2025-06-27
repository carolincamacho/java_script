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

if True:
    print("siempre es verdadero")

#uso de switch case

opcion=8

match opcion:
    case 1:
        print("seleccion 1")
    case 2:
        print("seleccion 2")
    case 3:
        print("seleccion 3")
    case _:
        print("Caso por Defecto")

