Aquí tienes un ejemplo hipotético de cómo podrías utilizar un adaptador en una aplicación basada en React y Node.js. Supongamos que estás construyendo una aplicación que necesita mostrar una lista de productos provenientes de dos fuentes diferentes con estructuras de datos incompatibles. Para hacer esto, puedes usar un adaptador para normalizar los datos de ambas fuentes y presentarlos en tu interfaz de usuario de manera coherente.

**Node.js (Servidor):**

En el lado del servidor, tienes dos rutas o controladores para obtener datos de las dos fuentes:

```javascript
// Fuente de datos 1 (API 1)
app.get('/api/source1/products', (req, res) => {
  // Lógica para obtener datos de la Fuente 1
  const data = fetchDataFromSource1();
  res.json(data);
});

// Fuente de datos 2 (API 2)
app.get('/api/source2/products', (req, res) => {
  // Lógica para obtener datos de la Fuente 2
  const data = fetchDataFromSource2();
  res.json(data);
});
```

**React (Cliente):**

En el lado del cliente, en tu componente React, puedes crear un adaptador para normalizar los datos de ambas fuentes en una estructura coherente. Aquí hay un ejemplo simplificado:

```javascript
import React, { useState, useEffect } from 'react';

function ProductAdapter(data) {
  // Adaptador para normalizar datos de diferentes fuentes
  return {
    id: data.id || data.product_id,  // Normalización de IDs
    name: data.name || data.productName, // Normalización de nombres
    price: data.price || data.productPrice, // Normalización de precios
  };
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Obtener datos de la Fuente 1
    fetch('/api/source1/products')
      .then((response) => response.json())
      .then((data) => {
        const normalizedProducts = data.map(ProductAdapter);
        setProducts(normalizedProducts);
      });

    // Obtener datos de la Fuente 2
    fetch('/api/source2/products')
      .then((response) => response.json())
      .then((data) => {
        const normalizedProducts = data.map(ProductAdapter);
        setProducts((prevProducts) => [...prevProducts, ...normalizedProducts]);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

En este ejemplo, `ProductAdapter` es el adaptador que toma los datos de ambas fuentes y los normaliza en una estructura común. Luego, los datos normalizados se almacenan en el estado del componente React y se muestran en la interfaz de usuario de manera coherente.

Este es un ejemplo simplificado para ilustrar cómo podrías usar un adaptador en una aplicación React/Node.js para normalizar datos de diferentes fuentes y presentarlos de manera uniforme en la interfaz de usuario. En aplicaciones reales, es posible que necesites manejar errores, gestionar la paginación y realizar otras tareas adicionales.