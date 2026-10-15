
const COOKIE = "carrito";

// Guardar un producto en el carrito
function comprarProducto() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let descripcion = document.getElementById("descripcion").value.trim();

    // Comprobar los datos
    if (isNaN(cantidad) || cantidad <= 0 || descripcion === "") {
        alert("Introduce una cantidad válida y una descripción.");
        return;
    }

    // Leer el carrito guardado en la cookie
    let carrito = leerCarrito();

    // Añadir el producto
    carrito.push({
        cantidad: cantidad,
        descripcion: descripcion
    });

    // Guardar el carrito en la cookie
    document.cookie = COOKIE + "=" +
        encodeURIComponent(JSON.stringify(carrito)) +
        "; max-age=604800; path=/; SameSite=Lax";

    alert("Producto añadido al carrito.");

    // Limpiar los campos
    document.getElementById("cantidad").value = "";
    document.getElementById("descripcion").value = "";
}

// Leer el carrito desde la cookie
function leerCarrito() {
    let cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        let partes = cookie.split("=");

        if (partes[0] === COOKIE) {
            try {
                return JSON.parse(
                    decodeURIComponent(partes.slice(1).join("="))
                );
            } catch (error) {
                return [];
            }
        }
    }

    return [];
}

// Mostrar el carrito por consola
function verCarrito() {
    let carrito = leerCarrito();
    let total = 0;

    console.clear();
    console.log("=== CARRITO DE LA COMPRA ===");

    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        console.log("TOTAL DE PRODUCTOS: 0");
        return;
    }

    for (let producto of carrito) {
        console.log(
            producto.cantidad + " " + producto.descripcion
        );

        total += producto.cantidad;
    }

    console.log("----------------------------");
    console.log("TOTAL DE PRODUCTOS: " + total);
}

// Asociar las funciones a los botones
document.getElementById("comprar")
    .addEventListener("click", comprarProducto);

document.getElementById("verCarrito")
    .addEventListener("click", verCarrito);
