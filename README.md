# Descripción
Aplicación CRUD para la gestión de los productos de una tienda,
cada prodicto tiene los campos: producto, descripción, categoria, cantidad, precio.

Login y Registro:
1. Los usuarios deben registrarse con correo y contraseña.
- [x] Se implemento autenticación y autorización usando JWT.
- [x] Solo usuarios autenticados pueden gestionar productos.
2. Funcionalidad CRUD:
- [x] Agregar, editar, eliminar y listar productos desde la interfaz gráfica.
- [x] Mostrar los productos en un formato de tabla.
3. Base de datos:
- [x] Utilizar MongoDB para almacenar los productos y la información de los
usuarios.
4. Frontend:
- [x] Crear una interfaz gráfica con React donde se realicen todas las operaciones
CRUD.
5. Backend:
- [x] backend construido con Node.js y Express.
- [x] contiene rutas seguras para los endpoints.


## Banckend
### Ejecutar en Dev 
1. Clonar repositorio
2. Crear copia de archivo ```.env.template``` y renombrar a ```.env```, llenar variables necesarias
3. Instalar dependencias ```npm i```
4. Correr proyecto en modo desarrollo ```npm run dev```

### Ejecutar en producción

1. Seguir pasos de 1 a 4 de sección [Ejecutar de Dev](#ejecutar-en-dev)
2. Crear build del proyecto ```npm run build```
3. Correr proyecto ```npm run start```


## Frontend
### Ejecutar en Dev 
1. Clonar repositorio
2. Crear copia de archivo ```.env.template``` y renombrar a ```.env```, llenar variables necesarias
3. Instalar dependencias ```npm i```
4. Correr proyecto en modo desarrollo ```npm run dev```

### Ejecutar en producción

1. Seguir pasos de 1 a 4 de sección [Ejecutar de Dev](#ejecutar-en-dev)
2. Crear build del proyecto ```npm run build```
3. Correr proyecto ```npm run start```

