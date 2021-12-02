var cuentas = [
    { nombre: "Hiromi", saldo: 200, password: "helloworld" },
    { nombre: "Manuel", saldo: 290, password: "l33t" },
    { nombre: "Luis", saldo: 67, password: "123" },
];

const validacion = () => {
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    hideLogin = document.getElementById("login").style.display = "none";
    showOptions = document.getElementById("options").style.display = "block";
    copy = document.getElementById(
        "parrafo"
    ).innerHTML = `Que deseas hacer ${user}?`;
    saldoButton = document.getElementById("query");
    retiroButton = document.getElementById("get");
    depositoButton = document.getElementById("post");
    cuentas.map((c) => {
        if (c.nombre === user) {
            if (c.password == password) {
                console.log("Bienvenido " + c.nombre);
                hideLogin;
                showOptions;
                copy;
                const query = () => {
                    let saldo = document.getElementById("saldo");
                    saldo.innerHTML =
                        "Tu saldo actual es: " + c.saldo + " dolares";
                };
                saldoButton.onclick = query;
                const get = () => {
                    let saldo = c.saldo;
                    let quantity = parseInt(prompt("Ingresa la cantidad: "));
                    saldo = saldo - quantity;

                    if (saldo < 10) {
                        alert("fondos insufiencientes");
                    } else {
                        alert("Operacion realizada con exito");
                        c.saldo = saldo;
                    }
                };
                retiroButton.onclick = get;
                const post = () => {
                    let saldo = c.saldo;
                    let quantity = parseInt(prompt("Ingresa la cantidad: "));
                    saldo = saldo + quantity;

                    if (saldo > 900) {
                        alert("Estas excediendo el limite de tu fondo");
                    } else {
                        alert("Operacion realizada con exito");
                        c.saldo = saldo;
                    }
                };
                depositoButton.onclick = post;
            } else {
                console.log("Password incorrecto");
            }
        }
    });
};
