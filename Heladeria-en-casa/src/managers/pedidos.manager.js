import{crearPedido} from "../models/pedidos.model";
import htmlElements from "../elements/html.elements";
import Swal from "sweetalert2"

let pedidos = JSON.parse (localStorage.getItem("pedidos")) || [];


const mostrarPedidos = () => {
    htmlElements.pedidosContenedor.innerHTML = ""
    console.log(pedidos);
    
    
    pedidos.forEach(pedido => {
        let recuadro = document.createElement("div")
        recuadro.className="col border border-2 rounded-2 mt-2"
        recuadro.innerHTML = `<h6 class="mt-2">${pedido.data}</h6>`
        let btnContenedor= document.createElement("div")
        htmlElements.pedidosContenedor.appendChild(recuadro);
       
       let btnEliminar = document.createElement("button")
        btnEliminar.innerText = "Eliminar";
        btnEliminar.className = "btn btn-warning btn-sm";
        btnEliminar.onclick = () =>eliminarPedidos (pedido.id)
        
        btnContenedor.appendChild (btnEliminar)

        recuadro.appendChild(btnContenedor)

        htmlElements.pedidosContenedor.appendChild(recuadro);
        
})}

const agregarPedidos =() => {
   let nuevoPedido =crearPedido(htmlElements.inputPedido.value);
    pedidos.push(nuevoPedido)
    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    console.log(pedidos);
    mostrarPedidos()
 }
  
 const eliminarPedidos= (idPedido) => {
   Swal.fire({
      title: "Estas seguro que quieres cancelar el pedido?",
      icon:"question",
      showCancelButton:true,
      confirmButtonText:"Si",
      cancelButtonText:"No", 
}).then(resp => {
   if (resp.isConfirmed) {
      pedidos = pedidos.filter (pedidos => pedidos.id !== idPedido);
      localStorage.setItem("pedidos", JSON.stringify(pedidos))
      mostrarPedidos()  
      Swal.fire({
         title:"Pedido cancelado con exito!",
         icon:"success"
      })
   }
})  


}
 

 const btnconfirmar =document.querySelector("#btnconfirmar")
   
    btnconfirmar.onclick=() => {
        Swal.fire({
            title: "Confirmacion de pedido!",
            text: "¿esta seguro que quiero confirmar su pedido?",
            icon: "question", 
            showCancelButton:true,
            confirmButtonText:"Si",
            cancelButtonText:"No"
        }).then(resp => {
            if (resp.isConfirmed) {
               Swal.fire({
                  title:"Pedido realizado con exito!",
                  text:"Se acordaran los sabores deseados y el precio total del pedido en el local físico. Direccion: Av campomar, 3467, Ranchos Bs.As. Argentina. Gracias por su pedido!",
                  icon:"success",
                  })  
       }})  
       
    }
   
export default {
    mostrarPedidos,
    agregarPedidos,
    eliminarPedidos,
 }