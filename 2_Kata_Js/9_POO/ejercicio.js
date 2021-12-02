// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
//             Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
//             calcularIMC()
//             esMayorDeEdad()
//             El constructor pide nombre, edad,sexo,peso y altura
//             Generar el RFC a partir de el nombre, edad y sexo

class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.imc = 0
    }
    calcularIMC() {
        let imc = (this.peso / (this.altura * this.altura)).toFixed(2);
        console.log(imc);
        this.imc = imc;
        return imc;
    }
    esMayorDeEdad() {
        if (this.edad > 18) {
            return "Es mayor de edad";
        } else return "No es mayor de edad";
    }
    obtenerRFC() {
        this.rfc = this.nombre + this.edad + this.sexo;
    }
}

let manuel = new Persona("Manuel", 15, "H", 150, 1.75);
manuel.obtenerRFC()
console.log(manuel.rfc)



// 2.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
//             -Titular y cantidad
//             -ingresar(cantidad)
//             -retirar(cantidad)
//             Hacer las validaciones previas
//             Como regla de negocio no debe de tener más de $900 y menos de $10


class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }
    ingresar(cantidad) {
        if (this.cantidad + cantidad > 900) {
            return "Estas superando el limite de $900; operacion cancelada";
        } else {
            this.cantidad += cantidad;
            return "Operacion exitosa: Tu saldo es de " + this.cantidad;
        }
    }
    retirar(cantidad) {
        if (this.cantidad - cantidad < 10) {
            return "No tienes fondos suficientes; el minimo es de $10";
        } else {
            this.cantidad -= cantidad;
            return (
                "Has retirado $" +
                cantidad +
                ". Tu nuevo saldo es de: " +
                this.cantidad
            );
        }
    }
}

let cuenta = new Cuenta("Manuel Tejada", 350);
console.log(cuenta.cantidad);
console.log(cuenta.retirar(400));
console.log(cuenta.ingresar(1000));
console.log(cuenta.retirar(50));
console.log(cuenta.ingresar(100));
