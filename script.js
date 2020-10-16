


//---------------------------------------------------------Tarea 1
// main
function procesar_iteracion_1() {

    let n_noches = leer_num_noches("input_interacion_1");
    let costeHotel = calcular_coste_hotel(n_noches);
    imprimir_precio_hotel(costeHotel);
}

// input
function leer_num_noches(_id) {

    let n_noches = document.getElementById(_id).value;
    n_noches = validar_entrada_hotel(n_noches);
    return n_noches;
}

// logic
function validar_entrada_hotel(entrada) {

    let num = parseInt(entrada);

    if (isNaN(num)) {
        num = 0;
    }

    return num;
}

function calcular_coste_hotel(n_noches) {

    let precio = 60;
    return (n_noches * precio);
}

// output
function imprimir_precio_hotel(precio) {
    console.log("El precio es: " + precio + "€");
}


//---------------------------------------------------------Tarea 2

// main
function procesar_iteracion_2() {
    let ciudad = leer_ciudad("input_interacion_2");
    let costeAvion = calcular_coste_ciudad(ciudad);
    imprimir_precio_avion(ciudad, costeAvion);
}

// input
function leer_ciudad(_id) {
    let ciudad = document.getElementById(_id).value;
    ciudad = validar_entrada_avion(ciudad);
    return ciudad;
}

// logic
function validar_entrada_avion(ciudad) {

    let ciudades_validas = ["Paris", "Boston", "Londres"];

    for (let i = 0; i < ciudades_validas.length; i++) {
        if (ciudades_validas[i].localeCompare(ciudad) == 0) {
            return ciudad;;
        }
    }

    return ciudades_validas[0]; // devolvemos paris
}

function calcular_coste_ciudad(ciudad) {

    /*
     "Paris": 180
     "Boston": 600
     "Londres": 120
    */

    let ciudades = ["Paris", "Boston", "Londres"];
    let precios = [180, 600, 120];
    let indice = ciudades.indexOf(ciudad);

    return precios[indice];
}

// output
function imprimir_precio_avion(ciudad, precio) {
    console.log("El precio del avión para la ciudad de " + ciudad + " es de: " + precio + "€");
}

//---------------------------------------------------------Tarea 3
// main
function procesar_iteracion_3() {

    let dias_alquiler = leer_dias_alquiler("input_interacion_3");
    let precio = calcular_coste_dias_alquiler(dias_alquiler);
    imprimir_precio_dias_alquiler(dias_alquiler, precio);
}

// input
function leer_dias_alquiler(_id) {

    let dias_alquiler = document.getElementById(_id).value;

    dias_alquiler = validar_entrada_dias_alquiler(dias_alquiler);

    return dias_alquiler;
}

// logic
function validar_entrada_dias_alquiler(dias_alquiler) {

    let num = parseInt(dias_alquiler);

    if (isNaN(num)) {
        num = 1;
    }

    return num;
}

function calcular_coste_dias_alquiler(dias_alquiler) {

    let precio_por_noche = 40;
    let descuento_3 = 20;
    let descuento_7 = 50;
    let precio_total = 0;

    precio_total = dias_alquiler * precio_por_noche;

    if (dias_alquiler >= 7) {
        precio_total -= descuento_7;
    }
    else if (dias_alquiler >= 3) {
        precio_total -= descuento_3;
    }

    return precio_total;
}

// output
function imprimir_precio_dias_alquiler(n_dias, precio_alquiler) {
    console.log("El precio por el número de " + n_dias + " días de alquiler es de " + precio_alquiler + "€");
}

//---------------------------------------------------------Tarea 4 ( se usan las funciones anteriores )
function procesar_iteracion_4() {

    let n_noches = leer_num_noches("input_interacion_4_n_noches");
    let precio_hotel = calcular_coste_hotel(n_noches);

    let ciudad = leer_ciudad("input_interacion_4_ciudad");
    let precio_ciudad = calcular_coste_ciudad(ciudad);

    let dias_alquiler = leer_dias_alquiler("input_interacion_4_dias_alquiler");
    let precio_dias_alquiler = calcular_coste_dias_alquiler(dias_alquiler);

    let precio_total = calcular_precio_total_viaje(precio_hotel, precio_ciudad, precio_dias_alquiler);
    imprimir_precio_total(precio_total);
}

function calcular_precio_total_viaje(precio_hotel, precio_ciudad, precio_dias_alquiler) {
    return (precio_hotel + precio_ciudad + precio_dias_alquiler);
}

function imprimir_precio_total(precio_total) {
    //console.log("El coste total del viaje será de: " + precio_total + "€");
    window.alert("El coste total del viaje será de: " + precio_total + "€");
}





