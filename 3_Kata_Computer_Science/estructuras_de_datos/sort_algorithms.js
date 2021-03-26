const miArray = [10, 4, 40, 32, 67, 43, 12, 31, 63, 1];

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        //este for sirve para iterar el arreglo
        for (let j = 0; j < array.length; j++) {
            //Este for sirve para comparar los valores en las posiciones
            if (array[j] > array[j + 1]) {
                // Hacemos la evalucion si el elemento actual es mayor que el siguiente para el intercambio de posiciones,
                let currentNumber = array[j]; // Guardamos la posicion actual del elemento a ordenar
                //hacer que la posicion actual tenga el valor de la siguiente posicion
                //y hacer que la siguiente posicion tenga el valor de la posicion actual
                array[j] = array[j + 1];
                array[j + 1] = currentNumber;
            }
        }
    }
    return array;
};

// console.log(bubbleSort(miArray));

const insertionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let pos = i; //Guardamos la posicion del elemento a ordenar
        //Evaluamos la izquierda esta vacia o el elemento a la izquierda del elemento a ordenar es mayor
        while (pos >= 0 && array[pos] < array[pos - 1]) {
            // Hacer el intercambio de posiciones
            let aux = array[pos - 1];
            array[pos - 1] = array[pos];
            array[pos] = aux;
            pos = pos - 1;
        }
    }
    return array;
};

console.log(insertionSort(miArray));
