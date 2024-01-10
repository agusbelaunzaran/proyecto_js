import htmlElements from "./elements/html.elements";
import pedidosManager from "./managers/pedidos.manager";


export const app = () => {
    console.log("ejecutando aplicacion");
    htmlElements.formPedido.onsubmit = (event) => {
    event.preventDefault();
    pedidosManager.agregarPedidos();
}
    pedidosManager.mostrarPedidos();
}
