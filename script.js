document.addEventListener("DOMContentLoaded", function () {
    function obtenerParametroURL(nombre) {
        const params = new URLSearchParams(window.location.search);
        return params.get(nombre);
    }

    let img = obtenerParametroURL("img");
    let name = obtenerParametroURL("name");
    let price = obtenerParametroURL("price");

    if (img) {
        document.getElementById("imagen-producto").src = decodeURIComponent(img);
    }
    if (name) {
        document.getElementById("nombre-producto").textContent = "Producto: " + decodeURIComponent(name);
    }
    if (price) {
        document.getElementById("precio-producto").textContent = "Precio: $" + decodeURIComponent(price);
    }
});
