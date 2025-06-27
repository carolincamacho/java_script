'''
    listas
    diccionarios
    metodos
    sets
'''

mi_lista=[1,"b",3,"f"]

print(type(mi_lista))

print(mi_lista.append("w"))
print(mi_lista)

mi_lista.pop()
print(mi_lista)

mi_lista.reverse()
print(mi_lista)

#diccionario
mi_dic={
    "nombre":"carolina",
    "edad":40
}

print(type(mi_dic))

print(mi_dic.keys())
print(mi_dic["nombre"])
mi_dic["ciudad"]="palmira"
print(mi_dic)
print(mi_dic.keys())
