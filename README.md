# Pokekool
## Índice

[1. Resumen](#1-resumen)
[2. Descubrimiento e investigación](#2-descubrimiento-e-investigacion)
[3. Síntesis y definición](#3-sintesis-y-definicion)
[4. Ideación](#4-ideacion)
[5. Prototipado](#5-prototipado)
[6. Testing](#6-testing)
[7. Iteración](#7-iteración)

***
## 1. Resumen
Pokekool es una webapp dirigida a una parte de la comunidad de jugadores de Pokémon GO, el juego más disruptor de realidad aumentada a nivel mundial. Aquí podrás conocer las características principales de cada pokémon de la región Kanto y cuántos de ellos se incuban en cada tipo de huevo ¡Así sabrás cuál eclosionar!

## 2. Descubrimiento e investigación
### 2.1 Usuarios
Realizamos una [encuesta](https://docs.google.com/forms/d/17cPuU6pji1mnmJnU8Qu863nFVSDe_7lcLrQ667nyoA8/edit) a 23 usuarios activos de Pokémon GO. Las conclusiones que obtuvimos fueron:

**Sobre los usuarios**
- El 70% son mujeres, el 20% son varones mientras que el 10% prefiere no decirlo.
- Sus edades oscilan entre los 21 - 30 años
- Todos vio la serie pokémon animada.
- El promedio de días que utilizan la aplicación oscila entre 1 y 3 días a la semana como máximo, especialmente los fines de semana.

**Sobre los pokémons y la región Kanto**
- Los pokémons que más recuerdan pertenecen a la región Kanto como Pikachu, Bulbasaur y Charmander.
- Las características más importantes, por orden de importancia, son: Su nivel de ataque y puntos de combate; el tipo de cada pokémon; si ya los atraparon.
- Los principales objetivos que tienen como maestro pokémon es atrapar al mayor número de pokémons y evolucionarlos así como capturar a los más raros.

**Sobre la experiencia de jugar Pokémon GO**
- El 70% manifestó que prefiere jugar acompañado, principalmente, de amigos o de familiares.
- El 30% reconoció que la app le permitía emular la experiencia de Ash como Maestro Pokémon.
- Lo más resaltante del juego, en orden de importancia es: la realidad aumentada; experimentar las aventuras de Ash Ketchum y vivir la experiencia de compartir entre amigos y familiares.
- Más del 80% no pertenece a ninguna comunidad pokémon especial.

## 3. Síntesis y definición

### 3.1 User persona
Antes de determinar el perfil de nuestro target, analizamos:

1. Los datos que arrojó la encuesta
2. El artículo [The UX of Pokémon GO: A Case Study](https://medium.com/@pedro_ux/pok%C3%A9mon-go-a-case-for-ux-and-psychology-8b6377db573a)

En base a ello, planteamos un **User Persona**

![user-social explorer](https://user-images.githubusercontent.com/51206952/62289514-88e45b00-b424-11e9-8fb8-39b8a6efe1ce.png).

## 4. Ideación
### 4.1 Sketch
![Page 1](https://lh3.googleusercontent.com/uQBlNtXgDct60k_SaNwx39aCjVd17rZQo8mUzwOO_UdabEhx6pzPm0QxBiSW-i47V5NvWNMqsILGvQ)

![Page 2](https://lh3.googleusercontent.com/w4zN1Icns2pAKVUvenNIwmSk_THbznN29J_O0iKuxR7XbjwTky0pBgE2rNAWvF-nFEVS3LcwUumJKw)

#### Feedback

- El menú de filtrado debe tener la opción de ocultarse para que los pokémones se aprecien con mayor espacio
- Colocar un placeholder en el buscador: "Busca a tu pokémon"
- Cuando se visualizan los detalles de cada pokémon, colocar un boton que permita volver a ver a los pokémons. 
- Cambiar el ícono de "Menú" por uno de "Filtrar"

## 5. Prototipado
#### [Prototipo de alta fidelidad](https://www.figma.com/file/UU9WaQoZWFm9ubMymNCoUjn5/Pokekool?node-id=93%3A168)

<img width="543" alt="Filtro" src="https://user-images.githubusercontent.com/51206952/61644530-833f8600-ac6a-11e9-90e3-4af3f04d9ca5.PNG">
<img width="542" alt="Filtro-2" src="https://user-images.githubusercontent.com/51206952/61644535-889cd080-ac6a-11e9-904c-18bcda66a3db.PNG">
<img width="546" alt="Modal" src="https://user-images.githubusercontent.com/51206952/61644538-889cd080-ac6a-11e9-80d2-2448b197dcbb.PNG">
<img width="543" alt="incubadora" src="https://user-images.githubusercontent.com/51206952/61644537-889cd080-ac6a-11e9-9ac2-1d5a0c022f60.PNG">

## 6. Testing
### 6.1 Evaluación heurística de usabilidad
Pokekool se analizó en base los **principios heurísticos de Nielsen**. Los evaluadores expertos fueron **Gonzalo** y **Wendy Medrano**, quienes detectaron potenciales los siguientes puntos de mejora:

#### A. Sección Pokedex - Home
- **Regresar al inicio** Agregar un botón que permita regresar hasta observar el primer pokémon.
- **El nombre del pokémon clickable:** Agregar la opción de clickar al nombre del pokémon.
- **Sustituir el ícono - botón de filtrar:** El ícono de filtrar debe ser reemplazado por un botón textual "Filtrar" o en su defecto ser acompañado de por el texto "Filtrar".
- **Mensaje de "Pokémon no encontrado":** Cuando el pokémon que busque el usuario no se encuentre, debería mostrarle un mensaje. Mostrar la pantalla vacía puede confundirlo e indicar un error en el sitio.

#### B. Sección Pokedex - Ficha de cada pokémon
- **Salir de la ficha":** Agregar a la tecla ESC como una forma de salir de la ficha pokémon.

#### C. Sección Pokedex - Panel de Filtrado
- **Filtro por tipos:**  La acción de clickar sobre el botón de un tipo de pokemón, este debe estar señalizada visualmente.
- **Número de pokémon:**  Agregar el número del pokémon como indicador de estado en el filtrado.
- **Agregar / especificar título:** El título *"Ordénalos ya"* solo hace referencia a las opciones de ordenar alfabéticamente y por aparición. La acción de filtrar por tipo y debilidad debería tener un título adicional.
- **Filtrado de tipo / debilidades:** Las debilidades utiliza las mismas categorías de los tipos de pokémons, por lo cual ambas acciones deberían ejecutarse desde el mismo panel de botones.
- **Filtros interconectados:** Las opciones de ordenar y filtrar necesitan funcionar al paralelo, indistintamente del orden en que se accionen.
- **Reiniciar filtro:** Debería existir una opción en donde el usuario pueda reiniciar el ordenado y filtrado.
- **Accesibilidad:** Los selectores deben tener un label y no solo un placeholder.

##### D. Sección Incubadora
- **Descripción de los tipos de huevos:**  El número de pokémons debe ir primero y entre paréntesis el porcentaje para mejorar la lectura.

### 6.2 User Testing

    Número de Usuarios: 5
    Técnica: Observación y feedback
    Descripción: Cada usuario ejecutó una lista de tareas

- [x] T1:  Loguéate ingresando "LABORATORIA" como usuario y contraseña
- [x] T2: Busca a tu pokémon favorito
- [ ] T3: Abre el panel de filtrado
- [x] T4: Ordena a los pokémons alfabeticamente
- [x] T5: Ordena a los pokémons por su orden de aparición
- [x] T6: Filtra a los pokémons por su tipo
- [x] T7: Filtra a los pokémons por su debilidad
- [x] T8: Selecciona un pokémon para ver sus características más relevantes
- [x] T9: Ingresa a la sección incubadora
- [x] T10: Elige el tipo de huevo que quieres eclosionar 

##### Conclusiones generales
- 4 usuarios no completaron la T3 debido a que no identificaron el ícono con la acción de filtrar. Dieron con el botón luego de navegar por las opciones clickables de la página. 
- Los usuarios manifestaron que les pareció tedioso utilizar el *scroll de subida* luego de navegar por todos los pokémons. Preguntaron: *"¿Cómo puedo subir más rápido?"*
- En la búsqueda (T2), al no encontrar a sus pokémons favoritos, la pantalla se mostro blanca. Los usuarios manifestaron su confusión mediante la pregunta: *"¿El pokémon no está o no funciona el buscador?"* 
- Los usuarios quisieron filtrar nuevamente y restaurar las opciones (T4 - T7). Al no lograrlo, actualizaron.
- Los términos más comunes que utilizaron los usuarios para calificar el sitio web fueron: *"bonito", "sencillo", "fácil de entender"*

## 7. Iteración
En base al feedback recopilado en la evaluación heurística y el user testing, se incorporaron las mejoras respectivas en Figma.
Para ver el **MVP-2** de nuestro prototipo, dar [aquí](https://www.figma.com/proto/hqk1K0I3oxnF2pwOW3LXz4/Pokekool-Iteraci%C3%B3n-2?node-id=283%3A23&scaling=min-zoom)