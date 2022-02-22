Aplicación de catálogo para teléfonos
Su tarea es escribir una aplicación de catálogo de productos muy simple. Tendrás 48 horas para completar esta tarea.
Siendo la fecha límite, el jueves 24 de febrero a las 11 AM hora UTC.

Ejercicio 1. Escribe una sencilla API REST en el lenguaje con el que te sientas más
cómodo (NodeJS, Rails, Java...) que...

- Tenga 1 endpoint /phones
- Devuelve un par de teléfonos móviles como iPhone 7, Samsung Galaxy S7, etc. con
  algunos atributos sencillos como la imagen del producto (solo hay que sacar alguna de google images), título
  descripción, color, precio, etc.
- Los datos pueden ser burlados, sin necesidad de una capa de persistencia.

Ejercicio 2. Escribir una aplicación React que muestre los teléfonos de la API

- Utiliza redux para la gestión del estado
- Axios (o una biblioteca similar) para obtener los datos de la API
- Crea un componente `PhoneListContainer` que muestre los teléfonos
- Crear un `PhoneDetailComponent` que muestre algunos detalles más sobre el teléfono
  cuando el usuario lo selecciona
- Mostrar un componente spinner o placeholder mientras la solicitud de la API está en curso
- Haz que tenga un aspecto decente. No es necesario un diseño súper sofisticado, pero como mínimo
  hazlo algo responsivo para que no se vea terrible en un teléfono móvil.

3. 3. Coloca el código en un repositorio público de Github con un archivo README.md que explique cómo ejecutar la aplicación.
      Ejercicio 1.PI y aplicación Frontend
