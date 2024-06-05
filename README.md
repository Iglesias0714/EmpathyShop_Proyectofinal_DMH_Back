# EmpathyShop Backend

Backend de la aplicación EmpathyShop desarrollado con Node.js, Express y MongoDB Atlas. Este repositorio contiene la lógica del servidor, las rutas de la API y la conexión a la base de datos en la nube.

## Tabla de Contenido

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Frontend de la aplicación](#Frontend-de-la-aplicación)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Clona el repositorio](#clona-el-repositorio)
  - [Navega al directorio del proyecto](#navega-al-directorio-del-proyecto)
  - [Instala las dependencias](#instala-las-dependencias)
- [Rutas de la API](#rutas-de-la-api)
- [Componentes del proyecto](#Componentes-del-proyecto)
- [Enlaces externos](#enlaces-externos)

## Descripción del Proyecto

EmpathyShop es una aplicación móvil que permite a los usuarios ver una lista de productos con sus nombres, precios y descripciones, así como añadir y eliminar productos.

##Frontend de la aplicación:


 [EmpathyShop_Movil](https://github.com/Iglesias0714/EmpathyShop_Movil)


## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose

### Clona el repositorio
```bash
git clone https://github.com/Iglesias0714/EmpathyShop_Proyectofinal_DMH_Back
```
### Navega al directorio del proyecto
```bash
cd EmpathyShop_Proyectofinal_DMH_Back
```
### Instala las dependencias
```bash
npm install
```

## Rutas de la API

| Método | Ruta          | Descripción                        |
|--------|---------------|------------------------------------|
| GET    | /products     | Obtiene todos los productos.       |
| POST   | /products     | Crea un nuevo producto.            |
| GET    | /products/:id | Obtiene un producto por su ID.     |
| PUT    | /products/:id | Actualiza un producto por su ID.   |
| DELETE | /products/:id | Elimina un producto por su ID.     |

## Componentes del Proyecto

| Componente              | Descripción                                                   | Enlace                                      |
|-------------------------|---------------------------------------------------------------|---------------------------------------------|
| `index.js`              | Archivo principal del servidor Express que configura middleware y rutas. | [index.js](./index.js)                      |
| `productController.js` | Controlador que maneja la lógica de las operaciones CRUD de productos. | [productController.js](./controllers/productController.js) |
| `userController.js`    | Controlador que maneja la lógica de las operaciones CRUD de usuarios. | [userController.js](./controllers/userController.js)       |
| `Product.js`     | Modelo de Mongoose que define la estructura de un producto en la base de datos. | [Product.js](./models/Product.js)           |
| `User.js`        | Modelo de Mongoose que define la estructura de un usuario en la base de datos. | [User.js](./models/User.js)                 |
| `productRoutes.js` | Define las rutas de la API para las operaciones CRUD de productos. | [productRoutes.js](./routes/productRoutes.js) |
| `userRoutes.js`  | Define las rutas de la API para las operaciones CRUD de usuarios. | [userRoutes.js](./routes/userRoutes.js)     |
| `package.json`          | Archivo que contiene las dependencias y scripts del proyecto. | [package.json](./package.json)              |
| `package-lock.json`     | Archivo que contiene las versiones exactas de cada dependencia. | [package-lock.json](./package-lock.json)    |




## Enlaces externos

| Enlace          | Descripción                             |
|-----------------|-----------------------------------------|
| [Node.js](https://nodejs.org) | Plataforma de JavaScript para el desarrollo del backend. |
| [Express](https://expressjs.com) | Framework web para Node.js. |
| [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | Servicio de base de datos en la nube. |
| [Mongoose](https://mongoosejs.com) | ODM (Object Data Modeling) para MongoDB y Node.js. |



