# Cosas prohibidas de React

## Mutar el state de un component directamente
Sin embargo, está prohibido en React mutar el state directamente, ya que puede provocar efectos secundarios inesperados.
+ El cambio de estado siempre debe realizarse estableciendo el estado en un nuevo objeto.
Si las propiedades del objeto de estado anterior no se modifican, simplemente deben copiarse, lo que se hace copiando esas propiedades en un nuevo objeto y estableciendo eso como el nuevo estado.

el estado de los componentes de React, NO debe modificarse directamente. Incluso si el estado mutante parece funcionar en algunos casos, puede provocar problemas que son muy difíciles de depurar.