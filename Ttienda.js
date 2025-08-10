
const carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const contadorCarrito = document.getElementById('contador-carrito');
const totalCarrito = document.getElementById('total');

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  // Limpiar la lista
  listaCarrito.innerHTML = '';

  carrito.forEach((producto, index) => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.style.marginLeft = '10px';
    btnEliminar.style.cursor = 'pointer';
    btnEliminar.onclick = () => eliminarDelCarrito(index);

    li.appendChild(btnEliminar);
    listaCarrito.appendChild(li);
  });

  // Actualizar contador carrito
  contadorCarrito.textContent = carrito.length;

  // Calcular total
  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
  totalCarrito.textContent = `Total: $${total}`;
}

