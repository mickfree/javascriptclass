inicio:
    for (contador = 0; contador <= 10; contador++) {
        if (contador % 2 !== 0) {
            continue inicio; //ir a la siguiente iteracion.
        }
        console.log(contador);

    }

/* OJo no es recomendable usar etiqueta-mas conocido como Go-to*/