// ======================== MODELO =========================
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
class ContactsView {
    // Metodo que sirve para mostrar la informacion en la vista
    init() {
        // console.log("Enlace de controlador y vista exitoso");
        this.contactsListController();
    }

    // Metodo para obtener los datos que vienen atraves del controlador desde el modelo

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

// Creamos una instancia de la clase vista
const VistaContactos = new ContactsView();

// ===============CONTROLADOR==================

// Segun la regla el modelo y la vista no pueden comunicarse directamente, deben hacerlo mediante el controlador
class BookViewController {
    constructor(Vista) {
        this.Vista = Vista;
    }

    init() {
        this.Vista.init();
    }

    //Obtenemos la informcion del modelo
    getContacts() {
        return contacts;
    }
}

// Creamos una instancia del controlador y le pasamos como argumento la instancia de la vista (porque asi me lo pide su constructor)
const BookApp = new BookViewController(VistaContactos);

//Invoco a la instacia del controlador y ejecuto su metodo init
BookApp.init();
