# EmpathyShop Backend

Backend de la aplicación EmpathyShop desarrollado con Node.js, Express y MongoDB Atlas. Este repositorio contiene la lógica del servidor, las rutas de la API y la conexión a la base de datos en la nube.

## Tabla de Contenido

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Clona el repositorio](#clona-el-repositorio)
  - [Navega al directorio del proyecto](#navega-al-directorio-del-proyecto)
  - [Instala las dependencias](#instala-las-dependencias)
- [Rutas de la API](#rutas-de-la-api)
- [Enlaces externos](#enlaces-externos)

## Descripción del Proyecto

EmpathyShop es una aplicación móvil que permite a los usuarios ver una lista de productos con sus nombres, precios y descripciones, así como añadir y eliminar productos.

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


## Enlaces externos

| Enlace          | Descripción                             |
|-----------------|-----------------------------------------|
| [Node.js](https://nodejs.org) | Plataforma de JavaScript para el desarrollo del backend. |
| [Express](https://expressjs.com) | Framework web para Node.js. |
| [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | Servicio de base de datos en la nube. |
| [Mongoose](https://mongoosejs.com) | ODM (Object Data Modeling) para MongoDB y Node.js. |



