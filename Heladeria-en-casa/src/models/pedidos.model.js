export const crearPedido= (texto) => {
    let nuevoPedido = {
        id:Date.now().toString(36),
        data: texto,
        realizado:false,
    }
    return nuevoPedido;
} 
 
 
 
 
 
 
 //export class pedido{
    
    //constructor(texto){
   //  this.id = Date.now().toString(36);
     //this.data = texto;
     //this.realizado = false;
    //}
   
//}