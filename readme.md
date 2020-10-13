VIAJAR ES UN PLACER

Vamos a construir una página de una agencia de viajes.

Iteración 1:

Crea una función llamada `calcularCosteHotel()` que tendrá las siguientes características:
- Recibe como parámetro un número de noches a pasar que previamente habremos recuperado con un prompt
- Calcula el precio total a pagar (precio fijo de 60€ por noche)
- Devuelve el precio

Recoge el precio de la función en una variable llamada `costeHotel` e imprímela por pantalla para comprobar que el cálculo es correcto.

Iteración 2:

Añade una función `calcularCosteAvion()` con estas características:. 
- Recibe como parámetro de entrada el nombre de una ciudad que recogeremos con un prompt
- Devolverá fuera de la función un coste en función de dicho parámetro

- Recoge el precio fuera de la función en una variable llamada `costeAvion` e imprime el valor para comprobar que el cálculo es correcto

Los costes por ciudad son los siguientes: "Paris": 180 "Boston": 600 "Londres": 120 "

💡: _Utiliza una estructura switch..case para trabajar los datos_

Iteración 3:

Añade la función `calcularCosteCoche()` con las características:

- Recibe como parámetro de entrada un número de días de alquiler
- Devuelve el coste en función de dicho parámetro pero teniendo en cuenta los siguientes aspectos:
  - Cada día de alquiler cuesta 40 €
  - Si se alquila por tres o más días se obtiene un descuento de 20 €
  - Si se alquila por 7 días o más se obtiene un descuento de 50 € (no acumulable con los 20 € de haber alquilado por más de 3 días)

Recoge el precio fuera de la función en una variable llamada costeCoche y comprueba que el cálculo es correcto

Iteración 4:

Crea otra funcion llamada `calcularCosteViaje()` que tendrá las siguientes características:
- Recibirá como parámetros de entrada: número de noches, ciudad y días de alquiler
- Dentro de esta función se llamará a las otras tres para calcular el precio total del viaje
- Substituiremos los tres alert anteriores por un único alert que muestre el precio total del viaje

Iteración 5: Bonus Track

Crea un front-end con un formulario para recoger los datos.



