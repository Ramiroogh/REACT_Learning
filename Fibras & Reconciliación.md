# Fibras (fibres)

## Las Fibras, permiten la Actualizacion de Componentes y Nodos

Las fibras en React son parte de la implementación interna de React y se utilizan para realizar el proceso de reconciliación y renderizado eficiente de los componentes. El algoritmo que utiliza React Fiber para detectar cambios en el DOM y volver a renderizar se llama "reconciliación".

Cuando hay un cambio en los datos o el estado de un componente en React, React utiliza las funciones de componente para volver a renderizar la interfaz de usuario (UI) de manera virtual. Esto significa que React crea una nueva representación virtual de la UI basada en los nuevos datos o estado. Luego, React compara la UI actual con la nueva UI virtual utilizando un algoritmo de comparación.

### Algoritmo de Comparacion (Reconciliación)

El algoritmo de comparación de React determina las diferencias entre la UI actual y la nueva UI virtual. Estas diferencias se conocen como "cambios". React luego aplica solo los cambios necesarios a la UI real en el navegador, evitando operaciones costosas de manipulación del DOM, como la creación de nuevos nodos o el acceso innecesario a nodos existentes.

El objetivo de este algoritmo de reconciliación es optimizar el rendimiento al minimizar la cantidad de cambios necesarios en el DOM real. Esto se logra al identificar y aplicar solo los cambios necesarios en lugar de volver a renderizar toda la UI en cada actualización.

En resumen, las fibras en React son parte de la implementación interna que permite un proceso eficiente de reconciliación y renderizado de componentes. El algoritmo de reconciliación utilizado por React Fiber detecta las diferencias entre la UI actual y la nueva UI virtual y aplica solo los cambios necesarios en el DOM real.