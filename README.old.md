# Frontend en Typescript usando React

Se trata de hacer un _frontend_ usando React con Typescript. 

La API para este backend es una cualquiera, en el campus encontraréis un PDF con ejemplos de APIs curiosas, pero no es necesario usar una de esas, hay muchas más. Se trata de usar los datos de la API escogida (típicamente suelen ser APIs de solo lectura, o se puede escribir poco) y mostrarlos de una forma atractiva y hasta cierto punto interactiva.

La idea sería hacer dos rutas básicas. En la principial habría que mostrar una lista de cosas (películas, fotos de la NASA, libros, ...). Esa lista mostrará un extracto de entidades las que sean en formato lista o tabla. Al clicar uno de los ítems, debería irse a una ruta que muestre los detalles sobre esa entidad (si es una película, pues todos los detalles de la película, con el argumento, actores, etc.).

La mayoría de APIs suelen tener endpoints para listar lo más popular o buscar por algun concepto (no es necesario hacer búsqueda pero es interesante convertir la pantalla de la lista en una búsqueda simple). Y luego suele haber también otros endpoints para obtener toda la información de cierta entidad.

Si la API requiere tener un `API_KEY` o precido deberéis registraros y obtenerla. Si la API es de pago buscad una que os permita probar sin pagar con un límite de prueba razonable (algunas de fútbol solo permiten 100 peticiones al día, que es muy poco).

## Entregable

Como anteriormente, para hacer esta práctica hay que:
- Hacer un _fork_ de este repositorio.
- Trabajar en el _fork_ haciendo commits regularmente (una práctica que aparece entera en un solo commit tendrá una nota muy baja o cero, hay que mostrar todo el proceso intermedio).
- Al finalizar, se debe crear un `ZIP` del repositorio (que incluya el fichero `.env`!) y entregarlo en el [Campus Online de UPC School](https://talent.upc.edu) (habrá una tarea preparada para ello).

El entregable es el código del proyecto, incluyendo:
- El código completo del frontend.
- Si se necesia un `API_KEY`, habrá que ponerla en el fichero `.env`.