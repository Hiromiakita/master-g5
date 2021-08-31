# Backend MVC

## Objetivos

Construir la arquitectura del proyecto siguiendo la arquitectura de modelo-vista-controlador.

Se deben organizar los archivos de cada capa en los siguientes directorios:

- Modelos en `/models`.
- Vistas, o endpoints, en `/routers`.
- Controladores en `/controllers`.

## Clase

Repasa brevemente la **arquitectura MVC**. Puedes encontrar un diagrama de apoyo en la presentación de `Arquitecturas de Software` del módulo `06_Patterns`. Discute con lxs estudiantes:

- ¿Cuál es el propósito de emplear una arquitecura?
- ¿Cuál es el objetivo de la arquitectura MVC?
- ¿Cuál es el propósito de cada capa?

Al terminar la discusión, continuamos trabajando con el mismo proyecto de la clase anterior `06_Intro_knex`. Acá construiremos nuestra API, con el objetivo de automatizar consultas a postgresql a través de endpoints.

#### Express

Empezamos creando y generando la configuración básica de una api con `Express` creando un archivo `index.js` a nivel raíz de nuestra aplicación:

```javascript
// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares para parsear el body de una petición
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint de prueba
app.get('/', (req, res) => res.status(200).json({ message: 'Hello World' }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
```

Luego, para poder correr nuestra aplicación cómodamente desde scripts, agregamos los scripts `dev`, `staging` y `production` de la siguiente manera:

```javascript
// package.json

{
  "name": "node_sql_api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  // Estos son los scripts que debe tener el proyecto
  "scripts": {
    "dev": "nodemon index.js",
    "staging": "nodemon index.js",
    "production": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Maui",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "knex": "^0.95.4",
    "pg": "^8.6.0"
  }
}

```

Acá notarán lxs estudiantes que los scripts `staging` y `dev` son básicamente iguales. Estos los generamos de una vez porque nos permitirán, más adelante, configurar las variables de entorno necesarias para conectarnos a la base de datos correspondiente. Por lo pronto, mientras desarrollamos todo el proyecto siempre estaremos ejecutando `npm run dev` .

Muestra cómo haciendo `npm run dev` el proyecto corre con `nodemon` y al hacer cualquier cambio este se reinicia automáticamente.

***Nota: nodemon puedes tenerlo instalado globalmente, o localmente como dependencia de desarrollo del proyecto***

Puedes revisar que funcione el endpoint de prueba desde `postman`, `insomnia` o incluso desde el navegador, accediendo a `localhost:3000`.

#### Routers (Views)

Creamos un directorio `/routers` y dentro de este creamos `rentalRouter.js` donde tendremos los endpoints para generar el CRUD de la tabla `rentals`, creado con la migración de la clase anterior.

Por lo pronto solo creamos el primer endpoint para poder insertar un registro en la tabla `rentals`:

```javascript
// /routers/rentalRouter.js

const express = require('express');
const router = express.Router();

// Create
router.post('/rentals', (req, res) => res.status(201).json({ message: 'rental created' }));

// Read All

// Read One

// Update One

// Delete One (borrado lógico)

// Destroy One (borrado físico)

module.exports = router;
```

Para conectar fácilmente este y múltiples archivos más a nuestra configuración principal de Express en el `index.js` creamos otro  archivo `index.js` pero esta vez dentro de `/rentals`. Este index funge como la conexión principal entre la app de express y cada archivo de router individual.

```javascript
// /routers/index.js

/*
	Este archivo funge como un directorio desde el cual
	se puede obtener cualquier router que se encuentre
	en el directorio /routers
*/

const express = require('express');
const router = express.Router();

/*
	Ahora acá podemos simplemente ir incorporando
	cada nuevo router que vayamos creando.
*/

router.use(require('./RentalRouter'));
// router.use(require('./CualquierOtroRouter'));

/*
	Exportamos el router que configuramos en las líneas previas,
	para poder conectarlo con nuestro index.js del proyecto,
	donde tenemos configurado Express.
*/
module.exports = router;
```

Ahora sí conectamos este router con nuestro `index.js`

```javascript
// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares para parsear el body de una petición
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint de prueba
app.get('/', (req, res) => res.status(200).json({ message: 'Hello World' }));

/*
		Acá conectamos el index.js de /routers, agregando a todos sus endpoints el prefijo
		/api/v1 para manejar un versionamiento desde el inicio 
 */
app.use('/api/v1', require('./routers'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
```

Probamos que funcione el endpoint desde `postman/insomnia` haciendo la petición `POST` a `localhost:3000/api/v1/rentals`

#### Controllers

Ahora queremos des-acoplar la lógica del endpoint en `/routers/rentalRouter.js` y colocarla en un directorio distinto, donde tendremos la capa de controlador. Para esto creamos un directorio `/controllers` donde haremos algo muy similar al directorio de `/routers`.

Primero escribimos el código del controlador en el archivo `rentalController.js`.

```JavaScript
// /controllers/index.js

const create = (req, res) => {
  // const newRental = req.body;
  const newRental = {
    title: req.body.title,
    address: req.body.address,
    guests: req.body.guests,
    description: req.body.description,
  }

  /* 
  	más adelante utilizando knex, acá deberíamos insertar 
		el objeto en la base datos y devolver la respuesta de esto
	*/
  return res.status(201).send({ message: 'rental created' });
}

module.exports = {
  create,
}
```

Creamos un archivo `index.js` dentro de `/controllers` que actúe como un directorio desde donde poder pedir cualquier controller:

```javascript
// /controllers/index.js

const RentalController = require('./RentalController');

module.exports = {
  RentalController,
}
```

Ahora sí, teniendo este index, podemos refactorizar nuestro `/routers/index.js`

```JavaScript
// /routers/index.js

const express = require('express');
const router = express.Router();

/*
	Mediante la des-estructuración podemos pedir uno o
	varios controllers desde el index.js de /controllers
*/
const { RentalController } = require('../controllers');

// Create
router.post('/rentals', RentalController.create);

// Read All

// Read One

// Update One

// Delete One (borrado lógico)

// Destroy One (borrado físico)

module.exports = router;
```

De esta manera, la vista no tiene ni idea de qué contiene el controlador, pero sabe que puede contar con este para ejecutar la lógica que sea necesaria.

#### Models

Terminamos agregando la capa de Modelo, donde ocuparíamos una conexión a `postgresql` empleando el paquete de `knex`. Creamos un nuevo directorio `/models` donde creamos un archivo para el modelo de Rental:

```JavaScript
// /models/Rental.js

const create = (bodyRental) => {
  // Acá agregaremos la consulta a la base de datos con knex
  return true;
}

module.exports = {
  create,
}
```

Al igual que en `/controllers`, hacemos un `index.js` para `/models`.

```javascript
// /models/index.js

const Rental = require('./Rental');

module.exports = {
  Rental,
};
```

Procedemos a refactorizar nuestro controlador de `rentals` para incorporar la petición a la base de datos:

```javascript
// /controllers/index.js

const { Rental } = require('../models');

const create = (req, res) => {
  // const newRental = req.body;
  const newRental = {
    title: req.body.title,
    address: req.body.address,
    guests: req.body.guests,
    description: req.body.description,
  }

  // Aún no creamos una consulta real, esto se hará la siguiente clase
  return Rental.create(newRental)
}

module.exports = {
  create,
}
```

## Actividad

Terminemos el esqueleto MVC para el resto de los endpoints comentados en en `RentalRouter.js`, haciendo lo mismo que hicimos con el endpoint para crear rentals a través de un post.

En la siguiente sesión haremos que la capa de `/models` se conecte a la base de datos y genere las consultas correspondientes.

#### Solución

- `/routers/RentalRouter.js`

```javascript
const express = require('express');
const router = express.Router();

const { RentalController } = require('../controllers');

// Create
router.post('/rentals', RentalController.create);

// Read All
router.get('/rentals', RentalController.findAll);

// Read One
router.get('/rentals/:idRental', RentalController.findOneById);

// Update One
router.patch('/rentals/:idRental', RentalController.updateOneById);

// Delete One (borrado lógico)
router.delete('/rentals/:idRental', RentalController.deleteOneById);

// Destroy One (borrado físico)
router.delete('/rentals/:idRental/destroy', RentalController.destroyOneById);

module.exports = router;
```

- `/controllers/RentalController.js`

```javascript
const { Rental } = require('../models');

const create = (req, res) => {
  const newRental = req.body;
	const response = Rental.create(newRental);
  return res.status(201).json({ message: 'rental created', response })
}

const findAll = (req, res) => {
  const response = Rental.findAll(); 
  return res.status(200).json({ message: 'rental created', responseDB })
}

const findOneById = (req, res) => {
  const { idRental } = req.params;
  const response = Rental.findOneByIdWithUser(idRental);
  return res.status(200).json({
      message: 'Successfully obtained rental by id',
      response,
    });
}

const updateOneById = (req, res) => {
  const { idRental } = req.params;
  const response = Rental.updateOneById(idRental, req.body);
  return res.status(200).json({
    message: 'Successfully updated rental by id',
    response,
  });
}

const deleteOneById = (req, res) => {
  const { idRental } = req.params;
	const response = Rental.deleteOneById(idRental);
	return res.status(204).json({ message: 'rental deleted', response });
}

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
}
```

- `/models/Rental.js`

```javascript
// /models/Rental.js

const create = (bodyRental) => {
  // Acá agregaremos la consulta a la base de datos con knex
  return true;
}

const findAll = () => {
  // Acá agregaremos la consulta a la base de datos con knex
  return true;
}

const findOneById = (id) => {
  // Acá agregaremos la consulta a la base de datos con knex
  return true;
}

const updateOneById = (id, bodyUpdate) => {
  // Acá agregaremos la consulta a la base de datos con knex
  return true;
}

const deleteOneById = (id) => {
  // Acá agregaremos la consulta a la base de datos con knex
  return true;
}

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
}

```

