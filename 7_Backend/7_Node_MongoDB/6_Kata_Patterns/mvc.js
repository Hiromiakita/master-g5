// ======================== MODELO =========================
// PASO 1 : CREAMOS EL MODELO (EN ESTE CASO AL NO USAR UNA BASE DE DATOS REAL LO VEREMOS TAMBIEN COMO UNA BASE DE DATOS )
const contacts = [
    {
        fname: "Rafael",
        lname: "Dominguez",
        phone: "78905678",
        email: "rdominguez@gmail.com",
    },
    {
        fname: "Juan",
        lname: "Perez",
        phone: "78905678",
        email: "rdominguez@gmail.com",
    },
    {
        fname: "Pablo",
        lname: "Rivera",
        phone: "78905678",
        email: "rdominguez@gmail.com",
    },
    {
        fname: "Esteban",
        lname: "Sanchez",
        phone: "78905678",
        email: "rdominguez@gmail.com",
    },
    {
        fname: "Claudia",
        lname: "Figueroa",
        phone: "78905678",
        email: "rdominguez@gmail.com",
    },
];

// ================ VISTA ===================
// PASO 2: CREAR LA CLASE DE LA VISTA Y EL METODO PARA MOSTRAR LA INFORMACION EN PANTALLA
class ContactsView {
    // Metodo que sirve para mostrar la informacion en la vista
    init() {
        console.log("Enlace de controlador y vista exitoso");

        //  PASO 9: Invocamos al metodo creado en el paso 8 para ver la informacion en la vista (terminamos el modelo MVC)
        this.contactsListController();
    }

    // PASO 8: creamos el metodo para obtener los datos que vienen atraves del controlador desde el modelo y donde se ejecuta la logica para crear los elementos html que se muestran en la vista
    contactsListController() {
        //Obtener los contactos y los guardamos en una constante
        const data = BookApp.getContacts();

        //obtener el id del elemento html
        const contactList = document.getElementById("contact-list");

        //Ciclo para recorrer los datos que me manda el controlador (Y que este controlador obtuvo del modelo) y crear los li (list-item) mediante el dom, para luego meterlos dentro de la etiqueta html que tiene un id llamado contact-list (que es un ul que esta en el documento html)
        for (let i = 0; i < contacts.length; i++) {
            let li = document.createElement("li");
            li.setAttribute("class", "contact-list-item");

            //Metemos dentro del li creado con el dom, las propiedades firstname y lastname de array donde vienen los datos
            li.innerHTML = `${data[i]["fname"]} , ${data[i]["lname"]}`;

            // metemos los li dentro del ul
            contactList.append(li);
        }
    }
}

//PASO 3: Creamos una instancia de la clase vista para usarla en la relacion vista-controlador
const VistaContactos = new ContactsView();

// ===============CONTROLADOR==================

// PASO 4: Segun la regla el modelo y la vista no pueden comunicarse directamente, deben hacerlo mediante el controlador, creamos el controlador (Hacemos la relacion vista-controlador)
class BookViewController {
    // Creamos la logica del contructor que servira para inicializar en el controlador la instancia de la vista (la cual recibimos como parametro), pero aun no se recibe directamente
    constructor(Vista) {
        this.Vista = Vista; // Invocamos a la instancia vista para acceder a sus propiedades
    }
    init() {
        this.Vista.init(); //ejecutamos el metodo de la instacia de la vista
    }
    // PASO 7: Obtenemos la informcion del modelo (a partir de aca hacemos la relacion modelo-controlador)
    getContacts() {
        return contacts;
    }
}

// PASO 5: Creamos una instancia del controlador y le pasamos como argumento la instancia de la vista (porque asi me lo pide su constructor), aqui si ya la recibimos directamente
const BookApp = new BookViewController(VistaContactos);

// PASO 6: Invoco a la instacia del controlador y ejecuto su metodo init, por el momento solo veiamos un console.log (Hasta aca teniamos la relacion vista-controlador)
BookApp.init();
